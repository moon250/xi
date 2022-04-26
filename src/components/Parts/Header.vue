<template>
  <header>
    <nav class="links">
      <ul>
        <li @click="scrollTo('about-me')">About me</li>
        <li @click="scrollTo('skills')">Skills</li>
        <li @click="scrollTo('projects')">Projects</li>
      </ul>
      <BurgerMenu/>
    </nav>
  </header>
</template>

<script setup>
import BurgerMenu from "../BurgerMenu.vue";

function scrollTo (part) {
  part = document.querySelector(`#${part}`);
  part.scrollIntoView({
    behavior: "smooth",
    inline: "nearest"
  });
}
</script>