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
    <button v-on:click="counter++">Click me</button>
    <p>{{counter * 2 > 10 ? 'Greater than 10' : 'Smaller or equal than 10'}}</p>
    <p v-on:mousemove="setCoordinates">
      Coordinates: {{x}} / {{y}}
      -
      <span v-on:mousemove.stop>DEAD SPOT</span>
    </p>
    <input type="text" v-on:keyup.enter="alertMe" />
    <hr />
    <input type="text" v-model="name" />
    <p>{{name}}</p>
    <hr />
    <p>Counter: {{counter2}}</p>
    <p>Result: {{output}}</p>
    <button v-on:click="counter2++">Increase</button>
    <button v-on:click="counter2--">Decrease</button>
    <hr />
    <button @click="changeLink">Click to change link</button>
    <a :href="link2">Link</a>
    <hr />
    <div class="demo" @click="attachRed = !attachRed" :class="divClasses"></div>
    <div class="demo" :class="{red:attachRed}"></div>
    <div class="demo" :class="[color,{red:attachRed}]"></div>
    <div class="demo" :style="myStyle"></div>
    <div class="demo" :style="[myStyle,{height: width+'px'}]"></div>
    <hr />
    <input type="text" v-model="color" />
    <input type="text" v-model="width" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello world",
      link: "https://vuejs.org",
      link2: "https://vuejs.org",
      finishedLink: '<a href="https://vuejs.org"> VueJS</a>',
      name: "Joe",
      counter: 0,
      counter2: 0,
      x: 0,
      y: 0,
      attachRed: false,
      color: "gray",
      width: 100
    };
  },
  computed: {
    // Computed only gets executed when something changes
    output() {
      return this.counter2 > 5 ? "Greater than 5" : "Smaller or equal than 5";
    },
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    }
  },
  watch: {
    //Executes code upon data changes (Best practice)
    //Must run in sync
    counter2() {
      var vm = this;
      setTimeout(function() {
        vm.counter2 = 0;
      }, 10000);
    }
  },
  methods: {
    // Methods gets called everytime when dom gets updated
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
    },
    changeLink() {
      this.link2 = "http://google.com";
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

.demo {
  width: 100px;
  height: 100px;
  display: inline-block;
  background-color: gray;
  margin: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
