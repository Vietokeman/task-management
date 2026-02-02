// ================================================
// API Layer - Application Entry Point
// ================================================
// PURPOSE:
// ASP.NET Core application startup.
// Configures services, middleware, and endpoints.
// Composition root for dependency injection.
// ================================================

var builder = WebApplication.CreateBuilder(args);

// ================================================
// SERVICE REGISTRATION
// ================================================

// Add Application layer services
// builder.Services.AddApplicationServices();

// Add Infrastructure layer services
// builder.Services.AddInfrastructureServices(builder.Configuration);

// Add API layer services
// builder.Services.AddControllers();
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// Add Authentication & Authorization
// builder.Services.AddAuthentication(...);
// builder.Services.AddAuthorization();

// Add CORS
// builder.Services.AddCors(...);

var app = builder.Build();

// ================================================
// MIDDLEWARE PIPELINE
// ================================================

// Exception handling middleware (first in pipeline)
// app.UseMiddleware<ExceptionHandlingMiddleware>();

// Swagger (development only)
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// HTTPS redirection
// app.UseHttpsRedirection();

// CORS
// app.UseCors();

// Authentication & Authorization
// app.UseAuthentication();
// app.UseAuthorization();

// Request logging middleware
// app.UseMiddleware<RequestLoggingMiddleware>();

// Map controllers
// app.MapControllers();

// Health checks
// app.MapHealthChecks("/health");

app.Run();
