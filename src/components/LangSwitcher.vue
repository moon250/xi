<template>
  <Icon class="lang-switcher" :name="`flag_${langs[currentLang]}`" :icon-class="false" @click="switchLanguage"/>
</template>

<script setup>
import Icon from "./Icon.vue";
import { ref } from "vue";

const currentLang = ref(0);
const langs = [
  "en",
  "fr"
];

function switchLanguage () {
  $i18n.locale = langs[currentLang];
  currentLang.value = currentLang.value + 1 < langs.length ? currentLang.value + 1 : currentLang.value - 1;
}
</script>