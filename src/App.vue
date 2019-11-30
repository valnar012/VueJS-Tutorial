<template>
  <div id="app">
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div @load="animationLoader()">
      <button @click="startEffect">Start Effect</button>
      <div id="effect" :class="intervalClass"></div>
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div
      :class="[noClass,{padding},{animation}]"
      :style="{transform:'rotateY('+this.Y+'deg)'}"
    >I got no class :(</div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
      <input type="text" v-model="input" />
      <div :class="input"></div>
    </div>
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
      <input type="text" />
      <input type="text" />
      <div></div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
      <input type="text" />
      <div></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button>Start Progress</button>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let main = this;
    setInterval(function() {
      main.Y = main.Y + 1;
      main.Y = main.Y % 360;
    }, 5);
  },
  data() {
    return {
      intervalSwitch: false,
      padding: true,
      animation: true,
      input: "",
      Y: 0
    };
  },
  computed: {
    // Computed only gets executed when something changes
    intervalClass() {
      let intervalClass = "";
      if (this.intervalSwitch) {
        intervalClass = "shrink";
      } else {
        intervalClass = "highlight";
      }
      return intervalClass;
    },
    noClass() {
      return { box: true, border: true };
    }
  },
  watch: {
    //Executes code upon data changes (Best practice)
    //Must run in sync
  },
  methods: {
    // Methods gets called everytime when dom gets updated
    startEffect() {
      let main = this;
      setInterval(function() {
        main.intervalSwitch = !main.intervalSwitch;
      }, 2000);
    }
  }
};
</script>

<style scoped>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}

.box {
  display: block;
  width: 100px;
  height: 100px;
  margin: 10%;
}

.border {
  border: 1px solid black;
  border-radius: 5px;
}

.padding {
  padding: 15px;
}
</style>
