using System.Web.Mvc;

namespace SampleAspNetApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult JavaScriptPage()
        {
            return View();
        }

        public ActionResult TypeScriptPage()
        {           
            return View();
        }        
    }
}