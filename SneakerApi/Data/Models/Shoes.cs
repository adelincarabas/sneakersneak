namespace SneakerApi.Data.Models
{
    public class Shoes
    {
        public int id { get; set; } // Primary key
        public string name { get; set; }
        public int size { get; set; }
        public string description { get; set; }
    }
}