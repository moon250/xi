<template>
  <Icon
    class="lang-switcher"
    :name="`flag_${currentLang}`"
    :icon-class="false"
    @click="switchLanguage()"
  />
</template>

<script setup>
import Icon from "./Icon.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n({ useScope: "global" });
const currentLang = ref(
  localStorage.hasOwnProperty("lang")
    ? localStorage.getItem("lang")
    : navigator.language.split("-")[0],
);

function switchLanguage() {
  currentLang.value = currentLang.value === "fr" ? "en" : "fr";
  localStorage.setItem("lang", currentLang.value);
  i18n.locale.value = currentLang.value;
  console.log(currentLang.value);
}
</script>
