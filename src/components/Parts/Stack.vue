<template>
  <div class="stack__main part" id="stack">
    <h1>{{ $t("titles.stack") }}</h1>
    <div class="stack__icons">
      <svg v-for="(language, rawName) in stack">
        <use :href="'/sprite.svg#' + rawName" class="stack__icon"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { stack } from "../../content/stack.json";
</script>