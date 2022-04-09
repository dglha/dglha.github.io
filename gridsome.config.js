// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  
  templates: {
    Single: '/:name',
    Post: '/post--:title',
    Tag: '/tag--:id'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Single',
        path: './content/pages/*.md',
      }
    },
  ], 

  transformers: {
    remark: {
      autolinkClassName: 'anchor-link',
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'dark_vs', skipInline: true } ],
        [ 'remark-toc', {} ]
      ]
    }
  }
}
