<template>
  <Header/>
  <Logo/>
  <AboutMe/>
  <Skills/>
  <Projects/>
  <Footer/>
</template>
<script setup>
import Footer from "./components/Parts/Footer.vue";
import Header from "./components/Parts/Header.vue";
import AboutMe from "./components/Parts/AboutMe.vue";
import Skills from "./components/Parts/Skills.vue";
import Projects from "./components/Parts/Projects.vue";
import Logo from "./components/Parts/Logo.vue";

let currentMode = parseInt(localStorage.getItem("theme"));
const root = document.documentElement;

if (currentMode === 0) {
  root.style.setProperty("--primary", "var(--light)");
  root.style.setProperty("--rgb-primary", "var(--rgb-light)");
  root.style.setProperty("--secondary", "var(--dark)");
  root.style.setProperty("--rgb-secondary", "var(--rgb-dark)");
} else {
  root.style.setProperty("--primary", "var(--dark)");
  root.style.setProperty("--rgb-primary", "var(--rgb-dark)");
  root.style.setProperty("--secondary", "var(--light)");
  root.style.setProperty("--rgb-secondary", "var(--rgb-light)");
}
</script>