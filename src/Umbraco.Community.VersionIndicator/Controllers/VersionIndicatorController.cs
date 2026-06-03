using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Umbraco.Cms.Api.Management.Controllers;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Community.VersionIndicator.Configuration;
using Umbraco.Community.VersionIndicator.Models;


namespace Umbraco.Community.VersionIndicator.Controllers;

[VersionedApiBackOfficeRoute("umbraco/version-indicator")]
[ApiExplorerSettings(GroupName = "Version Indicator API")]
public class VersionIndicatorController(IOptionsMonitor<VersionIndicatorOptions> optionsMonitor) : ManagementApiControllerBase
{

    [HttpGet]
    public IActionResult GetVersion()
    {
        var options = optionsMonitor.CurrentValue;

        return Ok(new VersionIndicatorConfigResponse
        {
            Color = options.Color,
            Version = options.Version
        });
    }
}
