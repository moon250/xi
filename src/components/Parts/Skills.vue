<template>
  <div class="skills__main part"  id="skills">
    <h1>Skills</h1>
    <div class="skills__languages">
      <div class="skills__icons" :class="{'skills__icons-unselected': notAnySelected}">
        <div v-for="(language, rawName) in skills.languages"
             :class="openedDropdown === rawName ? 'skills__icon-active ' : ''" class="skills__icon"
             @click="openDropdown(rawName)">
          <svg>
            <use :href="'/sprite.svg#' + rawName"
                 :class="{'skills__icon-active': isActive(rawName), 'skills__icon': !isActive(rawName) && !notAnySelected}"></use>
          </svg>
        </div>
      </div>
      <Dropdown v-if="openedDropdown !== ''" :content="getContent(openedDropdown, 'languages')"
                @close-dropdown="openedDropdown = ''; notAnySelected = true"/>
    </div>
    <div class="skills__tools"></div>
  </div>
</template>

<script setup>
import { skills } from "../../../config/skills.json";
import Icon from "../Icon.vue";
import Dropdown from "../Dropdown.vue";
import { ref } from "vue";

const openedDropdown = ref("");

const notAnySelected = ref(openedDropdown.value === "");

const isActive = ref((name) => {
  return openedDropdown.value === name;
});

const getContent = function (name, type) {
  const skill = skills[type][name];
  skill.rawName = name;
  return skill;
};

const openDropdown = function (rawName) {
  if (openedDropdown.value === rawName) {
    openedDropdown.value = "";
    notAnySelected.value = true;
    return;
  }
  openedDropdown.value = rawName;
  notAnySelected.value = false;
};
</script>