import { UmbHeaderAppButtonElement as e } from "@umbraco-cms/backoffice/components";
import { html as t } from "@umbraco-cms/backoffice/external/lit";
import { UMB_AUTH_CONTEXT as n } from "@umbraco-cms/backoffice/auth";
//#region src/version-indicator-header-app.ts
var r = class extends e {
	#e = null;
	#t;
	#n = !0;
	constructor() {
		super(), this.consumeContext(n, (e) => {
			this.#t = e;
		});
	}
	connectedCallback() {
		super.connectedCallback(), this.#r();
	}
	async #r() {
		let e = await this.#t?.getLatestToken(), t = await fetch("/umbraco/management/api/v1/umbraco/version-indicator", { headers: {
			Accept: "application/json",
			Authorization: `Bearer ${e}`
		} });
		this.#n = !1, t.ok && (this.#e = await t.json(), this.requestUpdate());
	}
	render() {
		return this.#n ? t`<uui-loader></uui-loader>` : t`
      <uui-button
        compact
        look="primary"
        type="button"
        style="
          --uui-button-height:1.2em;
          --uui-button-background-color:${this.#e?.color};
          --uui-button-background-color-hover:${this.#e?.color};
          --uui-button-background-color-disabled:${this.#e?.color};
          --uui-button-border-color:${this.#e?.color};
          --uui-button-border-color-hover:${this.#e?.color};
          --uui-button-border-color-disabled:${this.#e?.color};
          --uui-button-contrast:contast-color(${this.#e?.color});
          --uui-button-contrast-hover:contast-color(${this.#e?.color});
          --uui-button-contrast-disabled:contast-color(${this.#e?.color});
        "
      >
        <span style="font-size:.6em;line-height:1;text-transform:uppercase;">
          ${this.#e?.version}
        </span>
      </uui-button>
    `;
	}
};
customElements.get("version-indicator-header-app") || customElements.define("version-indicator-header-app", r);
//#endregion
export { r as default };

//# sourceMappingURL=version-indicator-header-app-Ds7jLrwd.js.map