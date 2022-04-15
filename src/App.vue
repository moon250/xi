<template>
  <Header/>
  <main>
    <svg class="logo">
      <use xlink:href="sprite.svg#logo"></use>
    </svg>
    <div class="socials">
      <svg class="icon">
        <use xlink:href="sprite.svg#discord"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="sprite.svg#instagram"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="sprite.svg#github"></use>
      </svg>
    </div>
  </main>
  <Footer/>
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>