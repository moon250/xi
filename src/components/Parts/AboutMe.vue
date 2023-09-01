<template>
  <div
    class="about-me__main part"
    id="about-me"
    role="region"
    aria-labelledby="about-me__title"
  >
    <h1 id="about-me__title">{{ $t("titles.aboutme") }}</h1>
    <p>{{ $t("descriptions.me", [age]) }}</p>
  </div>
</template>
<script setup>
const age = new Date(Date.now() - new Date("01/11/2006")).getFullYear() - 1970;
</script>
