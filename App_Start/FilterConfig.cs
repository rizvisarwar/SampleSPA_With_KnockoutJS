using System.Web;
using System.Web.Mvc;

namespace SampleSPA_With_KnockoutJS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
