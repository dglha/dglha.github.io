<template>
  <Layout :show-logo="false">
    <div class="section">
      <div class="container">
        <div class="title is-5 has-text-centered">
          Guess who she is?
        </div>
        <form @submit.prevent="findout">
          <div class="field has-addons" style="max-width: 400px; margin: 1rem auto;">
            <div class="control is-expanded">
              <input
                class="input is-borderless is-radiusless is-shadowless"
                type="text"
                placeholder="Type her name here"
                v-model="inputName"
              />
            </div>
            <div class="control">
              <button type="submit" class="button is-link is-radiusless">
                Findout
              </button>
            </div>
          </div>
        </form>
        <div class="has-text-centered">
          {{message}}
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import MD5 from 'crypto-js/md5'
const ALMOST = "Almost correct, please type her complete and correct name! 😁"
const CALL = "It's how I used to call her 😄"
const LOVELY_CALL = "It's my exclusive word to lovely call her 😊"
const guess = {
  "e358efa489f58062f10dd7316b65649e": ALMOST,
  "e7d707a26e7f7b6ff52c489c60e429b1": ALMOST,
  "cfac4e0dc47d98414cf373a2f09d28a1": CALL,
  "a53ff64efd169c1b4d085d6e7075c8d7": LOVELY_CALL,
  "c786f96bb9eef05cd4c8641fc7cdeb24": "Yes! :)"
}
export default {
  data () {
    return {
      inputName: null,
      message: null
    }
  },
  methods: {
    findout () {
      if (!this.inputName) {
        this.message = 'Please type her name 😴'
        return null
      }
      const hash = MD5(this.inputName.toLowerCase()).toString()
      if (!guess[hash]) {
        this.message = 'Sorry but you are wrong 😴'
        return null
      }
      this.message = guess[hash]
    }
  },
  metaInfo: {
    title: "Guess who she is"
  }
}
</script>

<style lang="scss" scoped>
</style>