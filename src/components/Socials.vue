<template>
  <div class="socials">
    <Icon name="discord" @click="copy"/>
    <Icon name="instagram" link="https://www.instagram.com/moon250_/"/>
    <Icon name="github" link="https://www.github.com/moon250"/>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";

const copy = async function () {
  await navigator.clipboard.writeText("moon250#4604");
};
</script>
