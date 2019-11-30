<template>
  <div id="app">
    <p v-if="show">You can see me!</p>
    <p v-else>Now you can see me!</p>
    <template v-if="show">
      <h1>Heading</h1>
      <p>Inside a template</p>
    </template>
    <p v-show="show">Do you also see me?</p>
    <button @click="show = !show">Switch</button>
    <hr />
    <ul>
      <li :key="ingredient" v-for="(ingredient,i) in ingredients">{{ingredient}} ({{i}})</li>
    </ul>
    <button @click="ingredients.push('spices')">Add New</button>
    <template v-for="(ingredient,index) in ingredients">
      <div :key="ingredient">
        <h1>{{ingredient}}</h1>
        <p>{{index}}</p>
      </div>
    </template>
    <hr />
    <ul>
      <li :key="person" v-for="person in persons">
        <div :key="value" v-for="(value,key,index) in person">{{key}}:{{ value }} ({{index}})</div>
      </li>
    </ul>
    <hr />
    <span :key="n" v-for="n in 10">{{n}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      ingredients: ["meat", "fruit", "cookies"],
      persons: [
        { name: "Max", age: 29, color: "red" },
        { name: "Anna", age: "unknown", color: "blue" }
      ]
    };
  },
  computed: {
    // Computed only gets executed when something changes
  },
  watch: {
    //Executes code upon data changes (Best practice)
    //Must run in sync
  },
  methods: {
    // Methods gets called everytime when dom gets updated
  }
};
</script>

<style scoped>
</style>
