<template>
  <div class="skills__main part">
    <h1>Skills</h1>
    <div class="skills__languages">
      <div class="skills__icons">
        <div v-for="(language, rawName) in skills.languages"
             :class="opennedDropdown === rawName ? 'skills__icon-active ' + 'skills__icon-' + rawName : 'skills__icon-' + rawName"
             class="skills__icon"
             @click="opennedDropdown = rawName">
          <Icon :name="rawName" :alt="language.name" :icon-class="false"/>
        </div>
      </div>
      <Dropdown v-if="opennedDropdown !== ''" :content="getContent(opennedDropdown, 'languages')"
                @close-dropdown="opennedDropdown = ''"/>
    </div>
    <div class="skills__tools"></div>
  </div>
</template>

<script setup>
import { skills } from "../../../config/skills.json";
import Icon from "../Icon.vue";
import Dropdown from "../Dropdown.vue";
import { ref } from "vue";

const opennedDropdown = ref("");
const getContent = function (name, type) {
  const skill = skills[type][name];
  skill.rawName = name;
  return skill;
};
</script>