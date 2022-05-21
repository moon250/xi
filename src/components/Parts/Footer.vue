<template>
  <footer>
    <div>
      <p>{{ $t("texts.madebyme") }}</p>
      <Socials/>
    </div>
    <p>{{ $t("texts.copyright") }}</p>
  </footer>
</template>

<script setup>
import Socials from "../Socials.vue";
</script>