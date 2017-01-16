<template>
    <div v-if="post">
        <h1 style="text-align: center; margin-top: 32px">{{post.title}}</h1>
        <div v-html="post.content" class="post-content"></div>
        <div class="post-author" v-if="author" style="font-size: 1em">
            created by {{author.username}}, email: {{author.email}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'postview',
  data: function () {
    return {
      post: null
    }
  },
  computed: {
    author: function () {
      return this.post.author
    }
  },
  created: function () {
    this.getPost(this.$route.params.postid)
  },
  methods: {
    getPost: function (postid) {
      this.$http.get(`/api/post/${postid}`)
      .then(response => {
        this.post = response.body
        console.log(response.body)
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
.post-content, .post-author {
    font-size: 1.2rem;
    margin: auto;
    width: 80%;
    margin-top: 44px; 
}
</style>