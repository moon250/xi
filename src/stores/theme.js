import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore('theme-store', () => {
	const currentTheme = ref("dark")
	if (
		window.matchMedia("(prefers-color-scheme: dark)") === false ||
		window.matchMedia("(prefers-color-scheme: dark)").matches === false
	) {
		currentTheme.value = "light";
	} else {
		currentTheme.value = "dark";
	}

	return { currentTheme }
})