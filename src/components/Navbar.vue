<template>
  <nav :class="['navbar is-transparent is-fixed-top', !isTop ? 'is-not-top' : null]" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <g-link to="/" class="navbar-item">
          <span style="display: inline-block; line-height: 1; padding: 2px 2px; border-radius: 8px;">
            <!-- <img src="../icon.png" style="display: block;"> -->
            dlha
          </span>
        </g-link>
        <g-link to="/about" active-class="is-active" class="navbar-item">
          Me
        </g-link>
        <g-link to="/posts" active-class="is-active" class="navbar-item">
          Posts
        </g-link>
        <g-link to="/contact" active-class="is-active" class="navbar-item">
          Contact
        </g-link>
        <a class="navbar-item is-hidden-tablet" @click="$emit('toggle-dark-mode', isDarkMode)">
          {{ isDarkMode ? '🌕' : '🌞' }}
        </a>

        <a role="button" @click="isActive = !isActive" :class="['navbar-burger burger', isActive ? 'is-active' : null]" aria-label="menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="['navbar-menu', isActive ? 'is-active' : null]">
        <div class="navbar-start">
          <a class="navbar-item is-hidden-mobile" @click="$emit('toggle-dark-mode', isDarkMode)">
            {{ isDarkMode ? '🌕' : '🌞' }}
          </a>
        </div>
        <div class="navbar-end">
          <a href="https://github.com/dglha" target="_blank" class="navbar-item">
            GitHub
          </a>
          <a href="https://fb.com/ha.duong212" target="_blank" class="navbar-item">
            Facebook
          </a>
          <a href="https://drive.google.com/file/d/1Qxx4Zf1p8L8VG5tYPr8L7XmYpBZ4SVlp/view?usp=drive_link" target="_blank" class="navbar-item">
            My CV
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ['isTop', 'isDarkMode'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-item {
    outline: none;
  }
}
.is-not-top {
  box-shadow: 0 0 20px 5px rgba(#000, .05);
  transition: 1s ease;
}
</style>