<template>
  <svg :class="props.iconClass ? 'icon' : ''" v-if="props.link.length === 0">
    <use :href="'sprite.svg#' + props.name"></use>
  </svg>
  <a
    v-else
    :href="props.link"
    :class="props.iconClass ? 'icon' : ''"
    :aria-label="props.name"
  >
    <svg :class="props.iconClass ? 'icon' : ''">
      <use :href="'sprite.svg#' + props.name"></use>
    </svg>
  </a>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  "icon-class": {
    type: Boolean,
    required: false,
    default() {
      return true;
    },
  },
  link: {
    type: String,
    required: false,
    default() {
      return "";
    },
  },
});
</script>
