<template>
  <div
    class="projects__main part"
    id="projects"
    role="region"
    aria-labelledby="projects__title"
  >
    <h1 id="projects__title">{{ $t("titles.projects") }}</h1>
    <div class="project__list">
      <div class="project__item" v-for="project in projects">
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
</script>
