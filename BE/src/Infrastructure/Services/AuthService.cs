using System.Security.Claims;
using Application.Common.Interfaces;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Services;

public class AuthService : IAuthService
{
    private readonly IdentityService _identityService;
    private readonly TokenService _tokenService;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private const string AccessTokenCookie = "accessToken";
    private const string RefreshTokenCookie = "refreshToken";

    public AuthService(
        IdentityService identityService,
        TokenService tokenService,
        IHttpContextAccessor httpContextAccessor)
    {
        _identityService = identityService;
        _tokenService = tokenService;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<AuthResponse> RegisterAsync(string email, string password, string firstName, string lastName)
    {
        var (success, message, user) = await _identityService.RegisterAsync(email, password, firstName, lastName);

        if (!success)
        {
            return new AuthResponse
            {
                Success = false,
                Message = message
            };
        }

        return new AuthResponse
        {
            Success = true,
            Message = message,
            UserId = user?.Id.ToString()
        };
    }

    public async Task<AuthResponse> LoginAsync(string email, string password)
    {
        var (success, user) = await _identityService.ValidateLoginAsync(email, password);
        if (!success || user == null)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Invalid credentials"
            };
        }

        var (accessToken, accessTokenExpiresAt) = _tokenService.GenerateAccessToken(user);
        var (refreshToken, refreshTokenExpiresAt) = _tokenService.GenerateRefreshToken();

        await _identityService.UpdateRefreshTokenAsync(user, refreshToken);

        SetTokenCookies(accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt);

        return new AuthResponse
        {
            Success = true,
            AccessToken = accessToken,
            AccessTokenExpiresAt = accessTokenExpiresAt,
            AccessTokenExpiresIn = (int)(accessTokenExpiresAt - DateTime.UtcNow).TotalSeconds,
            RefreshToken = refreshToken,
            RefreshTokenExpiresAt = refreshTokenExpiresAt,
            RefreshTokenExpiresIn = (int)(refreshTokenExpiresAt - DateTime.UtcNow).TotalSeconds,
            UserId = user.Id.ToString(),
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Message = "Login successful"
        };
    }

    public async Task<AuthResponse> RefreshTokenAsync(string? accessToken = null, string? refreshToken = null)
    {
        var httpContext = _httpContextAccessor.HttpContext;
        if (httpContext == null)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "HTTP context not available"
            };
        }

        var token = accessToken ?? httpContext.Request.Cookies[AccessTokenCookie];
        var refresh = refreshToken ?? httpContext.Request.Cookies[RefreshTokenCookie];

        if (string.IsNullOrEmpty(token) || string.IsNullOrEmpty(refresh))
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Missing tokens"
            };
        }

        var principal = _tokenService.GetPrincipalFromExpiredToken(token);
        if (principal == null)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Invalid token"
            };
        }

        var userId = principal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            return new AuthResponse
            {
                Success = false,
                Message = "User not found in token"
            };
        }

        var user = await _identityService.GetUserByIdAsync(userId);
        if (user == null || user.SecurityStamp != refresh)
        {
            return new AuthResponse
            {
                Success = false,
                Message = "Invalid refresh token"
            };
        }

        var (newAccessToken, newAccessTokenExpiresAt) = _tokenService.GenerateAccessToken(user);
        var (newRefreshToken, newRefreshTokenExpiresAt) = _tokenService.GenerateRefreshToken();

        await _identityService.UpdateRefreshTokenAsync(user, newRefreshToken);

        SetTokenCookies(newAccessToken, newAccessTokenExpiresAt, newRefreshToken, newRefreshTokenExpiresAt);

        return new AuthResponse
        {
            Success = true,
            AccessToken = newAccessToken,
            AccessTokenExpiresAt = newAccessTokenExpiresAt,
            AccessTokenExpiresIn = (int)(newAccessTokenExpiresAt - DateTime.UtcNow).TotalSeconds,
            RefreshToken = newRefreshToken,
            RefreshTokenExpiresAt = newRefreshTokenExpiresAt,
            RefreshTokenExpiresIn = (int)(newRefreshTokenExpiresAt - DateTime.UtcNow).TotalSeconds,
            Message = "Token refreshed successfully"
        };
    }

    public void Logout()
    {
        var httpContext = _httpContextAccessor.HttpContext;
        if (httpContext == null) return;

        httpContext.Response.Cookies.Delete(AccessTokenCookie);
        httpContext.Response.Cookies.Delete(RefreshTokenCookie);
    }

    private void SetTokenCookies(
        string accessToken, DateTime accessTokenExpiresAt,
        string refreshToken, DateTime refreshTokenExpiresAt)
    {
        var httpContext = _httpContextAccessor.HttpContext;
        if (httpContext == null) return;

        httpContext.Response.Cookies.Append(
            AccessTokenCookie, accessToken,
            new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                IsEssential = true,
                Expires = accessTokenExpiresAt
            });

        httpContext.Response.Cookies.Append(
            RefreshTokenCookie, refreshToken,
            new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                IsEssential = true,
                Expires = refreshTokenExpiresAt
            });
    }
}
