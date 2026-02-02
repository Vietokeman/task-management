namespace Application.Common.Interfaces;

public interface IAuthService
{
    Task<AuthResponse> LoginAsync(string email, string password);
    Task<AuthResponse> RefreshTokenAsync(string? accessToken = null, string? refreshToken = null);
    Task<AuthResponse> RegisterAsync(string email, string password, string firstName, string lastName);
    void Logout();
}

public class AuthResponse
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public string? AccessToken { get; set; }
    public DateTime AccessTokenExpiresAt { get; set; }
    public int AccessTokenExpiresIn { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime RefreshTokenExpiresAt { get; set; }
    public int RefreshTokenExpiresIn { get; set; }
    public string? UserId { get; set; }
    public string? Email { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
}
