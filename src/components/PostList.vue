<template>
  <div>
    <p class="title is-5">
      {{title || 'Latest posts'}}
    </p>
    <div v-for="(edge, i) in posts" :key="edge.node.id">
      <g-link class="post-link" :to="edge.node.path">
        <span class="is-hidden-mobile numbering">
          {{i + 1}}
        </span>
        <span class="post-link-title">
          <span class="has-text-link" v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">
            #{{ tag.title }}
          </span>
          <span v-if="edge.node.tags" v-html="': ' + (edge.node.title)" />
          <span v-else>
            <span class="has-text-link is-hidden-tablet">
              #{{i + 1}}&nbsp;
            </span>
            <span v-html="(edge.node.title)" />
          </span>
        </span>
        <span class="post-link-date is-hidden-mobile">
          {{ edge.node.date }}
        </span>
      </g-link>
    </div>
  </div>
</template>

<script>

export default {
  props: ['title', 'posts'],
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.post-link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  margin: 0 -1rem;
  color: var(--text-color, #000);
  border-left: 2px solid var(--post-link-border-left-color, #fff);
  &:hover {
    background: var(--post-link-background-color-hover, #dcdde1);
    border-left: 2px solid var(--post-link-border-left-color-hover, #192a56);
  }
  .numbering {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 1rem 0 0;
    background: #333;
    padding: 4px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
  }
  .post-link-title {
    flex-grow: 10;
  }
  .post-link-date {
    flex-grow: 1;
    text-align: right;
    color: var(--post-link-date-text-color, #7f8fa6);
  }
}
</style>