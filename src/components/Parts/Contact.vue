<template>
  <div class="contact__main part" aria-labelledby="contact__title">
    <h1 id="contact__title">{{ $t("titles.contact") }}</h1>
    <form method="get" action="#" class="contact__form">
      <div class="contact__input">
        <label for="username">{{ $t("texts.name") }}</label>
        <div class="contact__field-group">
          <input
            type="text"
            name="username"
            id="username"
            class="contact__field"
            required
          />
        </div>
      </div>
      <div class="contact__input">
        <label for="email">{{ $t("texts.email") }}</label>
        <div class="contact__field-group">
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            class="contact__field"
            :data-errorable="email !== ''"
            required
          />
        </div>
      </div>
      <div class="contact__input">
        <label for="message">{{ $t("texts.message") }}</label>
        <textarea
          name="message"
          id="message"
          class="contact__field"
          required
        ></textarea>
      </div>

      <button type="submit" class="contact__button">
        {{ $t("texts.send") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>
