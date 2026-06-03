import { UmbHeaderAppButtonElement } from "@umbraco-cms/backoffice/components";
import { html } from "@umbraco-cms/backoffice/external/lit";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";

interface VersionIndicatorConfig {
  version?: string;
  color?: string;
}

class VersionIndicatorHeaderAppElement extends UmbHeaderAppButtonElement {

  #config: VersionIndicatorConfig | null = null;
  #authContext: any;
  #loading = true;

  constructor() {
    super();
    this.consumeContext(UMB_AUTH_CONTEXT, (ctx) => {
        this.#authContext = ctx;
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    void this.#fetchConfig();
  }

  async #fetchConfig() {
    const token = await this.#authContext?.getLatestToken();;

    const response = await fetch("/umbraco/management/api/v1/umbraco/version-indicator", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    this.#loading = false;

    if (response.ok) {
      this.#config = await response.json() as VersionIndicatorConfig;
      this.requestUpdate();
    }
  }

  render() {
    if (this.#loading) {
      return html`<uui-loader></uui-loader>`;
    }

    return html`
      <uui-button
        compact
        look="primary"
        type="button"
        style="
          --uui-button-height:1.2em;
          --uui-button-background-color:${this.#config?.color};
          --uui-button-background-color-hover:${this.#config?.color};
          --uui-button-background-color-disabled:${this.#config?.color};
          --uui-button-border-color:${this.#config?.color};
          --uui-button-border-color-hover:${this.#config?.color};
          --uui-button-border-color-disabled:${this.#config?.color};
          --uui-button-contrast:contast-color(${this.#config?.color});
          --uui-button-contrast-hover:contast-color(${this.#config?.color});
          --uui-button-contrast-disabled:contast-color(${this.#config?.color});
        "
      >
        <span style="font-size:.6em;line-height:1;text-transform:uppercase;">
          ${this.#config?.version}
        </span>
      </uui-button>
    `;
  }
}

if (!customElements.get("version-indicator-header-app")) {
  customElements.define("version-indicator-header-app", VersionIndicatorHeaderAppElement);
}

export default VersionIndicatorHeaderAppElement;
