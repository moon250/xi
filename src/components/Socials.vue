<template>
  <div class="socials">
    <Icon name="discord" @click="copy"/>
    <a href="https://www.instagram.com/moon250_/" class="icon">
      <Icon name="instagram"/>
    </a>
    <a href="https://www.github.com/moon250" class="icon">
      <Icon name="github"/>
    </a>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";

const copy = async function () {
  await navigator.clipboard.writeText("moon250#4604");
};
</script>
