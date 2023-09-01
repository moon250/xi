<template>
  <Icon
    name="menu"
    :icon-class="false"
    class="burger-menu__icon"
    @click="openMenu"
  />
  <div
    class="burger-menu__main"
    v-if="opened"
    @keydown.esc="closeMenu"
    tabindex="-1"
  >
    <div class="burger-menu__top">
      <ul class="burger-menu__links">
        <li @click="scrollTo('about-me')">{{ $t("titles.aboutme") }}</li>
        <li @click="scrollTo('projects')">{{ $t("titles.projects") }}</li>
        <li @click="scrollTo('contact')">{{ $t("titles.contact") }}</li>
      </ul>
      <div class="burger-menu__actions">
        <Icon
          name="cross"
          :icon-class="false"
          class="burger-menu__close"
          @click="closeMenu"
        />
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { ref } from "vue";
import Footer from "./Parts/Footer.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import LangSwitcher from "./LangSwitcher.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const opened = ref(false);

function openMenu() {
  opened.value = true;
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  opened.value = false;
  document.body.style.overflow = "";
}

function scrollTo(part) {
  closeMenu();
  part = document.querySelector(`#${part}`);
  part.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
  });
}
</script>
