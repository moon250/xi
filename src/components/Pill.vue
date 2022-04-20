<template>
  <div :class="props.checked ? 'pill pill__filled' : 'pill'"></div>
</template>

<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
});
</script>