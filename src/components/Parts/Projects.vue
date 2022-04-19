<template>
  <div class="projects__main part">
    <h1>Projects</h1>
    <div class="project__list">
      <div class="project__item" v-for="(project) in projects"
           :style="projectStyle(project)">
        <h3>{{ project.name }}</h3>
        <p>
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from "../../../config/projects.json";

const projectStyle = (project) => `--background: url("/img/${project.thumbnail}");`;
</script>
