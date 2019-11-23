<template>
  <div id="app">
    <div id="exercise">
      <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
      <div>
        <p>Current Value: {{ value }}</p>
        <button @click="value += 5">Add 5</button>
        <button @click="value += 1">Add 1</button>
        <p>{{ result }}</p>
      </div>
      <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
      <div>
        <input @keydown.enter="setResetTime" :value="resetTime" type="text" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      resetTime: 5000
    };
  },
  computed: {
    result() {
      return this.value >= 37 ? "done" : "";
    }
  },
  watch: {
    result() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, this.resetTime);
    }
  },
  methods: {
    setResetTime(event) {
      this.resetTime = event.target.value;
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
