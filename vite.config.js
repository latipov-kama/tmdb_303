import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/",
	server: {
		port: 5173,
		open: true,
	},
	build: {
		outDir: "dist",
		assetsDir: "assets", // Где хранятся сжатые файлы
		sourcemap: false, // Отключаем карты кода (уменьшает размер)
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				filmPage: resolve(__dirname, "src/pages/cardsFilm/index.html"),
			},
		},
	},
	preview: {
		port: 5000,
		open: true,
	},
});
