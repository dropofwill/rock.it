using System;
using System.Data.Entity;

namespace rock_it_asp.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public bool IsLink { get; set; }
    }

    public class PostDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
    }
}