<template>
  <Header />
  <Title />
  <AboutMe />
  <Projects />
  <Contact />
  <Footer />
</template>
<script setup>
import Footer from "./components/Parts/Footer.vue";
import Header from "./components/Parts/Header.vue";
import AboutMe from "./components/Parts/AboutMe.vue";
import Projects from "./components/Parts/Projects.vue";
import Title from "./components/Parts/Title.vue";
import Contact from "./components/Parts/Contact.vue";
import { useThemeStore } from "./stores/theme";

const colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const themeStore = useThemeStore();

colorSchemeMedia.addEventListener("change", () => {
  themeStore.currentTheme =
    colorSchemeMedia === false || colorSchemeMedia.matches === false
      ? "light"
      : "dark";
  document.documentElement.classList.remove(
    colorSchemeMedia === false || colorSchemeMedia.matches === false
      ? "dark"
      : "light",
  );
  document.documentElement.classList.add(
    colorSchemeMedia === false || colorSchemeMedia.matches === false
      ? "light"
      : "dark",
  );
});
</script>
