using Microsoft.EntityFrameworkCore;
using SneakerApi.Data.Models;

namespace SneakerApi.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) {}

        public DbSet<Shoes> Shoes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Shoes>().ToTable("shoes", "public"); // Specify table and schema
        }
    }
}