	import { defineConfig } from "vite";
	
	export default defineConfig({
	    build: {
	        lib: {
	            entry: "src/bundle.manifests.ts",
	            formats: ["es"],
                fileName: "version-indicator"
	        },
	        outDir: "../../Umbraco.Community.VersionIndicator.Assets/wwwroot",
	        emptyOutDir: true,
	        sourcemap: true,
	        rollupOptions: {
	            external: [/^@umbraco/],
	        },
	    },
	    base: "/App_Plugins/VersionIndicator/",
	});