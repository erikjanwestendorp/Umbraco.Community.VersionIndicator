using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Community.VersionIndicator.Configuration;

namespace Umbraco.Community.VersionIndicator.Composers;

public class VersionIndicatorComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.Configure<VersionIndicatorOptions>(builder.Config.GetSection(Constants.ConfigurationSection));
    }
}
