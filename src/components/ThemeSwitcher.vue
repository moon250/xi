<template>
  <div class="theme-switcher__container">
    <input class="theme-switcher__checkbox" type="checkbox" @click="switchTheme" :checked="currentMode === 1">
    <Icon name="sun" class="theme-switcher__icon" id="sun"/>
    <Icon name="moon" class="theme-switcher__icon" id="moon"/>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";

if (!localStorage.hasOwnProperty("theme")) localStorage.setItem("theme", "0");

let currentMode = parseInt(localStorage.getItem("theme"));
const root = document.documentElement;
const themes = [
  "light",
  "dark"
];

function switchTheme () {
  currentMode = currentMode + 1 < themes.length ? currentMode + 1 : currentMode - 1;
  localStorage.setItem("theme", currentMode.toString());

  if (currentMode === 0) {
    root.style.setProperty("--primary", "var(--light)");
    root.style.setProperty("--rgb-primary", "var(--rgb-light)");
    root.style.setProperty("--secondary", "var(--dark)");
    root.style.setProperty("--rgb-secondary", "var(--rgb-dark)");
    return;
  }

  root.style.setProperty("--primary", "var(--dark)");
  root.style.setProperty("--rgb-primary", "var(--rgb-dark)");
  root.style.setProperty("--secondary", "var(--light)");
  root.style.setProperty("--rgb-secondary", "var(--rgb-light)");
}
</script>