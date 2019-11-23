<template>
  <div id="app">
    <div id="exercise">
      <!-- 1) Show an alert when the Button gets clicked -->
      <div>
        <button v-on:click="showAlert">Show Alert</button>
      </div>
      <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
      <div>
        <input v-on:keyup="updateValue" type="text" />
        <p>{{ value }}</p>
      </div>
      <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
      <div>
        <input v-on:keydown.enter="updateValue" type="text" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    showAlert() {
      alert("Show an alert when the Button gets clicked");
    },
    updateValue(event) {
      this.value = event.target.value;
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
