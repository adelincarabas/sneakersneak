using Microsoft.EntityFrameworkCore;
using SneakerApi.Data; // Replace with your actual namespace
using SneakerApi.Data.Models; // Replace with your actual namespace

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS services and configure the policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Add DbContext with PostgreSQL connection string
builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Use the CORS policy
app.UseCors("AllowLocalhost");

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Define the endpoint to fetch data from the database
app.MapGet("/weatherforecast", async (MyDbContext dbContext) =>
{
    var weatherData = await dbContext.Shoes.ToListAsync(); // Fetch data from the database
    return Results.Ok(weatherData);
})
.WithName("GetWeatherForecast");

app.Run();