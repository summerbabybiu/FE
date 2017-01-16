<template>
<div class="postview">
   <div v-for="post in posts">
    <md-card>
        <md-card-header>
          <router-link :to="{ path:'/post/'+post.objectId }">
                <div class="md-title">{{post.title}}</div>
          </router-link>
        </md-card-header>
        <md-card-content>{{post.summary}}</md-card-content>
    </md-card>
   </div>
</div>
</template>

<script>
export default {
  name: 'postlist',
  data: function () {
    return {
      page: 1,
      total_page: 0,
      total_posts: 0,
      posts: []
    }
  },
  created: function () {
    this.getPage(this.page)
  },
  methods: {
    getPage: function (page) {
      this.$http.get(`/api/post/list?page=${page}`)
      .then(response => {
        var body = response.body
        this.total_posts = body.total_post
        this.total_page = body.total_page
        this.page = body.page
        this.posts = body.posts
      })
      .catch(e => {
        this.emmitError()
      })
    },
    emmitError: function () {
      this.$emit('loadError')
    }
  }
}
</script>

<style>
.postview {
    padding: 8px;
}
</style>