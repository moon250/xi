<template>
  <div class="dropdown__main">
    <Icon :name="props.reference" :icon-class="false" class="dropdown__icon"/>
    <div class="dropdown__right">
      <div class="dropdown__header">
        <h2>{{ subject.name }}</h2>
        <Icon name="arrow" :icon-class="false" class="dropdown__header-arrow" @click="$emit('close-dropdown')"/>
      </div>
      <p class="dropdown__description">
        {{ subject.description }}
      </p>
      <div class="dropdown__level" v-if="subject.hasOwnProperty('level')">
        <h3>Level :</h3>
        <Pill :checked="subject.level - 1 >= 0"/>
        <Pill :checked="subject.level - 2 >= 0"/>
        <Pill :checked="subject.level - 3 >= 0"/>
      </div>
      <div class="dropdown__technologies" v-if="subject.hasOwnProperty('technologies')">
        <h3>Technologies I use :</h3>
        <Icon v-for="technology in subject.technologies" :name="technology"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { skills } from "../../config/skills.json";
import Pill from "./Pill.vue";

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  reference: {
    type: String,
    required: true
  }
});
console.log(props.reference);

const list = skills[props.type];
const subject = list[props.reference];
</script>