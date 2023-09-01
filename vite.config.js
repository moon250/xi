import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import manifestSRI from "vite-plugin-manifest-sri";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import autoprefixer from "autoprefixer";
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		manifestSRI(),
		VueI18nPlugin({
			// locale messages resource pre-compile option
			include: resolve(dirname(fileURLToPath(import.meta.url)), './resources/js/locales/**'),
		}),
	],
	root: "./public/",
	css: {
		postcss: {
			plugins: [
				autoprefixer({})
			]
		}
	},
});
