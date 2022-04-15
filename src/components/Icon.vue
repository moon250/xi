<template>
  <svg :class="props.iconClass ? 'icon' : ''">
    <use :href="'sprite.svg#' + props.name"></use>
  </svg>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  "icon-class": {
    type: Boolean,
    required: false,
    default () {
      return true;
    }
  }
});
</script>