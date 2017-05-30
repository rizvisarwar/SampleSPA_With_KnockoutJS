using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SampleSPA_With_KnockoutJS.Controllers
{
    /// <summary>
    /// I removed [Authorize] annotation to skip the login page
    /// </summary>
    //[Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
