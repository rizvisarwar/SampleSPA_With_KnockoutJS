using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SampleSPA_With_KnockoutJS.Models
{
    public class SampleSPA_With_KnockoutJSContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public SampleSPA_With_KnockoutJSContext() : base("name=SampleSPA_With_KnockoutJSContext")
        {
        }

        public System.Data.Entity.DbSet<SampleSPA_With_KnockoutJS.Models.Movie> Movies { get; set; }
    }
}
