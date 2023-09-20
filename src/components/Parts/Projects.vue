<template>
  <div
    class="projects__main part"
    id="projects"
    role="region"
    aria-labelledby="projects__title"
  >
    <h1 id="projects__title">{{ $t("titles.projects") }}</h1>
    <div class="project__list">
      <div
        class="project__item"
        v-for="project in projects"
        :key="project.name"
        @mouseover="hover"
      >
        <svg
          class="project__corner"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path d="M1 1H15.9677V18.0323H33V33H1V1Z" />
        </svg>
        <svg
          class="project__corner"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path d="M1 1H15.9677V18.0323H33V33H1V1Z" />
        </svg>

        <img :src="'/img/' + project.thumbnail" :alt="project.name" />
        <div class="project__description">
          <h2>{{ project.name }}</h2>
          <p>
            {{ $t(project.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from "../../content/projects.json";
import { ref } from "vue";

const hovered = ref(false);
const hover = () => (hovered.value = !hovered.value);
</script>
