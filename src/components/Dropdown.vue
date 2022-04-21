<template>
  <div class="dropdown__main">
    <Icon :name="content.rawName" :icon-class="false" class="dropdown__icon"/>
    <div class="dropdown__right">
      <div class="dropdown__header">
        <h2>{{ content.name }}</h2>
        <Icon name="arrow" :icon-class="false" class="dropdown__header-arrow" @click="$emit('close-dropdown')"/>
      </div>
      <p class="dropdown__description">
        {{ content.description }}
      </p>
      <div class="dropdown__level" v-if="content.hasOwnProperty('level')">
        <h3>Level :</h3>
        <Pill :checked="content.level - 1 >= 0"/>
        <Pill :checked="content.level - 2 >= 0"/>
        <Pill :checked="content.level - 3 >= 0"/>
      </div>
      <div class="dropdown__technologies" v-if="content.hasOwnProperty('technologies')">
        <h3>Technologies I use :</h3>
        <Icon v-for="technology in content.technologies" :name="technology"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import Pill from "./Pill.vue";

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>