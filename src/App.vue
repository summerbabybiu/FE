<template>
  <div id="app">
  <md-toolbar>
    <md-avatar class="md-small">
      <img src="https://ws3.sinaimg.cn/large/8696f529gw1fbri8jchqvj20dc0cjwf9.jpg" alt="People">
    </md-avatar>
    <h2 class="md-title" style="flex: 1">&nbsp{{title}}</h2>
  </md-toolbar>
    <router-view v-on:loadError="openSnack"></router-view>
    <!--提示框-->
    <md-snackbar :md-position="'top' + ' ' + 'right'" ref="snackbar" :md-duration="2000">
      <span>{{snackbarMessage}}</span>
    <md-button class="md-accent" md-theme="blue" @click="$refs.snackbar.close()">知道了</md-button>
  </md-snackbar>
  </div>
</template>

<script>
// import postview from './components/Postview'

export default {
  name: 'app',
  data: function () {
    return {
      title: '站点建设中',
      snackbarMessage: ''
    }
  },
  methods: {
    openSnack: function () {
      this.snackbarMessage = '载入失败'
      this.$refs.snackbar.open()
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
