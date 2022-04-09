<template>
  <div class="container made-with">
    With <g-link to="/love" class="has-text-danger">❤️</g-link> by dlha
    <span class="is-pulled-right is-hidden-mobile">
      Templated by 
      <a href="https://github.com/Arsfiqball" target="_blank">Arsfiqball</a>
    </span>
    <!-- <span class="is-pulled-right is-hidden-mobile">
      Powered by
      <a target="_blank" href="https://gridsome.org/">Gridsome</a> and
      <a target="_blank" href="https://www.netlify.com/">Netlify</a>
    </span> -->
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
.made-with {
  padding: 0 0 3rem 0;
}
@media screen and (max-width: 768px) {
  .made-with {
    padding: 0 1rem 3rem 1rem;
    text-align: center;
  }
}
</style>