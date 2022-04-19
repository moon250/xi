<template>
  <main class="logo__main">
    <Icon name="logo" :icon-class="false" class="logo__image"/>
    <div class="socials">
      <Icon name="discord" @click="copy"/>
      <a href="https://www.instagram.com/moon250_/">
        <Icon name="instagram"/>
      </a>
      <a href="https://www.github.com/moon250">
        <Icon name="github"/>
      </a>
    </div>
  </main>
</template>

<script setup>
import Icon from "../Icon.vue";

const copy = async function () {
  await navigator.clipboard.writeText("moon250#4604");
};
</script>