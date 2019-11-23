<template>
  <div id="app">
    <h1 v-once>{{ title }}</h1>
    <a v-bind:href="link">
      <img src="./assets/logo.png" />
    </a>
    <div>{{ showTitle("Hello")}}</div>
    <hr />
    <p v-html="finishedLink"></p>
    <hr />
    <button v-on:click="incrementCounter($event,2)">Click me</button>
    <p>{{counter}}</p>
    <p v-on:mousemove="setCoordinates">
      Coordinates: {{x}} / {{y}}
      -
      <span v-on:mousemove.stop>DEAD SPOT</span>
    </p>
    <input type="text" v-on:keyup.enter="alertMe" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello world",
      link: "https://vuejs.org",
      finishedLink: '<a href="https://vuejs.org"> VueJS</a>',
      counter: 0,
      x: 0,
      y: 0
    };
  },
  methods: {
    showTitle(data) {
      this.title = data;
      return this.title;
    },
    incrementCounter(event, step = 1) {
      this.counter += step;
    },
    setCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe() {
      alert("Why are you doing this?");
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
