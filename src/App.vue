<template>
  <div id="app">
    <h1 v-once>{{ title }}</h1>
    <a v-bind:href="link">
      <img src="./assets/logo.png" />
    </a>
    {{ showTitle()}}
    <hr />
    <p v-html="finishedLink"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello world",
      link: "https://vuejs.org",
      finishedLink: '<a href="https://vuejs.org"> VueJS</a>'
    };
  },
  methods: {
    showTitle() {
      this.title = "Hello";
      return this.title;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
