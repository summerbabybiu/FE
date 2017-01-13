<template>
  <div id="app">
    <h1>站点测试中</h1>
    <div v-for="post in posts">
      <h2>{{post.title}}</h2>
      <p>{{post.summary}}</p>
      <pre v-html="post.content"></pre>
    </div>
    <p>第 {{page}}页，共 {{total_page}}页 {{total_posts}}篇文章</p>
  </div>
</template>

<script>
import apiConfig from './apiconfig'

export default {
  name: 'app',
  data: function () {
    return {
      page: 1,
      total_page: 0,
      total_posts: 0,
      posts: [],
      load_failed: false
    }
  },
  created: function () {
    this.getPage(this.page)
  },
  methods: {
    getPage: function (page) {
      this.$http.get(`${apiConfig.apiUrl()}post/list?page=${page}`)
      .then(response => {
        var body = response.body
        this.total_posts = body.total_post
        this.total_page = body.total_page
        this.page = body.page
        this.posts = body.posts
        console.log(response)
      })
      .catch(e => {
        this.load_failed = true
      })
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
