<template>
  <header>
    <nav class="links">
      <ul>
        <li @click="scrollTo('about-me')">{{ $t("titles.aboutme") }}</li>
        <li @click="scrollTo('skills')">{{ $t("titles.stack") }}</li>
        <li @click="scrollTo('projects')">{{ $t("titles.projects") }}</li>
      </ul>
      <BurgerMenu />
    </nav>
  </header>
</template>

<script setup>
import BurgerMenu from "../BurgerMenu.vue";

function scrollTo(part) {
  part = document.querySelector(`#${part}`);
  part.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
  });
}
</script>
