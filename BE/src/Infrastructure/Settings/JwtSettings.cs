namespace Infrastructure.Settings;

public class JwtSettings
{
    public string Key { get; set; } = string.Empty;
    public string Issuer { get; set; } = string.Empty;
    public int ExpireInHours { get; set; } = 24;
}
