<template>
  <div class="stack__main part" id="stack" role="region" aria-labelledby="stack__title">
    <h1 id="stack__title">{{ $t("titles.stack") }}</h1>
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