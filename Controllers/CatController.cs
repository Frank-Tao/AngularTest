using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AngularTest.Models;

namespace AngularTest.Controllers
{
    [Route("api/[controller]")]
    public class CatController : Controller
    {
        [HttpGet]
        public IEnumerable<Cat> GetAll()
        {
            var list = new List<Cat>();
            list.Add(new Cat() { Name = "Lilly", Age=12 });
            list.Add(new Cat() { Name = "Lucy" , Age=6 });
            return list;
        }

        [HttpGet("{name}")]
        public Cat Get(string name)
        {
            return new Cat() { Name = name, Age=-1 };
        }

        [HttpPost]
        public Cat Insert([FromBody]Cat cat)
        {
            // write the new cat to database
            return cat;
        }

        [HttpPut("{name}")]
        public Cat Update(string name, [FromBody]Cat cat)
        {
            cat.Name = name;
            // write the updated cat to database
            return cat;
        }

        [HttpDelete("{name}")]
        public void Delete(string name)
        {
            // delete the cat from the database

        }
    }
}