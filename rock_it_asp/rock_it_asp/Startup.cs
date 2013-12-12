using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(rock_it_asp.Startup))]
namespace rock_it_asp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
