<template>
  <div id="app" :class="['has-navbar-fixed-top']">
    <Navbar
      :is-top="isTop"
      :is-dark-mode="isDarkMode"
      @toggle-dark-mode="toggleDarkMode"
    />

    <main class="main">
      <slot />
    </main>

     <div>
      <MadeWith/>
    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar'
import MadeWith from '@/components/MadeWith'

export default {
  components: {
    Navbar,
    MadeWith,
  },

  data () {
    return {
      isTop: process.isClient ? window.scrollY < 20 : true,
      isDarkMode: false
    }
  },
};
</script>

<style lang="scss" scoped>
</style>