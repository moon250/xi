import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme-store", () => {
  const currentTheme = ref("dark");

  currentTheme.value = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  document.documentElement.classList.add(currentTheme.value);
  document.documentElement.classList.remove(
    currentTheme.value === "light" ? "dark" : "light",
  );

  return { currentTheme };
});
