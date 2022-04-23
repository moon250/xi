<template>
  <svg :class="props.iconClass ? 'icon' : ''" v-if="props.link.length === 0">
    <use :href="'sprite.svg#' + props.name"></use>
  </svg>
  <a :href="props.link" v-else :class="props.iconClass ? 'icon' : ''">
    <svg :class="props.iconClass ? 'icon' : ''">
      <use :href="'sprite.svg#' + props.name"></use>
    </svg>
  </a>
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
  },
  link: {
    type: String,
    required: false,
    default () {
      return "";
    }
  }
});
</script>