using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET api/values
        public IEnumerable<Movie> Get()
        {
            return db.Movies.ToArray();
        }

        // GET api/values/5
        public Movie Get(int id)
        {
            Movie movie = db.Movies.FirstOrDefault(m => m.MovieId == id);
            return movie;
        }

       

        // POST api/values
        public void Post([FromBody]Movie value)
        {
            // Create movie in db logic
            Movie movie = new Movie();
            movie.Title = value.Title;
            movie.Genre = value.Genre;
            movie.Director = value.Director;
            db.Movies.Add(movie);
            db.SaveChanges();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Movie value)
        {
            // Update movie in db logic
            Movie movie = db.Movies.FirstOrDefault(m => m.MovieId == id);
            movie.Title = value.Title;
            movie.Genre = value.Genre;
            movie.Director = value.Director;
            db.SaveChanges();
        }

        // DELETE api/values/5
       
    }

}