<template>
  <div class="theme-switcher__container">
    <input
      class="theme-switcher__checkbox"
      type="checkbox"
      @click="switchTheme"
      :checked="store.currentTheme === 'dark'"
    />
    <Icon name="sun" class="theme-switcher__icon" id="sun" />
    <Icon name="moon" class="theme-switcher__icon" id="moon" />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { useThemeStore } from "../stores/theme";

const store = useThemeStore();

function switchTheme() {
  store.currentTheme = store.currentTheme === "light" ? "dark" : "light";

  document.documentElement.classList.remove(
    store.currentTheme === "light" ? "dark" : "light",
  );
  document.documentElement.classList.add(
    store.currentTheme === "light" ? "light" : "dark",
  );
}
</script>
