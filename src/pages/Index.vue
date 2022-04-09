<template>
  <Layout :show-logo="false">
    <div class="section is-small">
      <div class="container">
        <div class="columns">
          <div class="column is-7">
            <p class="title is-3 is-hidden-tablet">Hi, I'm Le Ha</p>
            <p class="title is-1 is-hidden-mobile">Hi, I'm Le Ha</p>
            <p class="is-size-6">
              I am currently studying for a Computer Science Engineering degree
              at the Vietnam - Korea University of Information and Communication
              Technology. Do you want to know more about me?
              <g-link to="/about">Click here!</g-link>
            </p>
          </div>
          <div class="column is-5">
            <figure>
              <img class="" src="../assets/images/MoonBook-Retina.svg">
            </figure>
          </div>
        </div>
      </div>
      <div class="is-hidden-tablet" style="margin-top: 2rem"></div>
      <div class="container">
        <PostList :posts="$page.posts.edges" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost (limit: 6) {
    edges {
      node {
        id
        title
        date (format: "D MMM 'YY")
        timeToRead
        path
        cover_image (width: 770, height: 380, blur: 10)
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostList from '@/components/PostList.vue'
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Iqbal Mohammad Abdul Ghoni",
    meta: [
      {
        name: "description",
        content:
          `I'm a tech enthusiast. I love IT and Robotics engineering. ` +
          `I currently study Electrical Engineering degree at ` +
          `University of Sultan Ageng Tirtayasa. I'm also available for ` +
          `freelance Software Engineering job`,
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
</style>