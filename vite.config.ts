import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import vueRouter from "unplugin-vue-router/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vueRouter({ routesFolder: [{ src: "src/routes" }] }),
		vue(),
		vueDevTools(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
