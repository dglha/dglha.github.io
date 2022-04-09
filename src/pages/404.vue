<template>
  <Layout :show-logo="false">
    <div class="container has-text-centered page-heading">
      <p class="title is-4 is-hidden-mobile">
        Page not found
      </p>
      <p class="title is-5 is-hidden-tablet">
        Page not found
      </p>
      <p class="subtitle is-6">
        Error 404
      </p>
    </div>

    <div class="divider"></div>

    <div class="container page-content is-max-widescreen has-text-centered">
      <div class="content">
        Sorry, we couldn't find this page!
        <br>
        
      </div>
      <div class="column">
            <figure>
              <img class="" src="../assets/images/404.svg">
            </figure>
          </div>
    </div>

    <div class="spacer"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page not found'
  }
}
</script>

<style lang="scss" scoped>
.page-heading {
  padding: 1.5rem 1.5rem 0 1.5rem;
}
.page-content {
  max-width: 746px;
  padding: 0 1.5rem;
}
.divider {
  display: block;
  width: 100px;
  height: 4px;
  background: #222;
  line-height: 1;
  margin: 1.5rem auto;
  border-radius: 2px;
}
.spacer {
  display: block;
  margin-bottom: 3rem;
}
</style>