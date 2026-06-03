import type { ManifestHeaderApp } from "@umbraco-cms/backoffice/extension-registry";

const headerApp: Array<ManifestHeaderApp> = [
    {
        "type": "headerApp",
        "alias": "Umbraco.Community.VersionIndicator.HeaderApp",
        "name": "Version Indicator Header App",
        "kind": "button",
        "js": () => import("./version-indicator-header-app.js"),
        "weight": 1000,
        "meta": {
            "label": "Version",
            "icon": "icon-server"            
        }
    }
];

export const manifests: Array<UmbExtensionManifest> = [
  ...headerApp
]; 