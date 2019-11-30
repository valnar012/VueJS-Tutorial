<template>
  <div id="app">
    <section class="row">
      <div class="small-6 columns">
        <h1 class="text-center">YOU</h1>
        <div class="healthbar">
          <div
            class="healthbar text-center"
            style="background-color: green; margin: 0; color: white;"
            :style="{width: (player.life*3.8)+'px'}"
          >{{player.life}}</div>
        </div>
      </div>
      <div class="small-6 columns">
        <h1 class="text-center">MONSTER</h1>
        <div class="healthbar">
          <div
            class="healthbar text-center"
            style="background-color: green; margin: 0; color: white;"
            :style="{width: (enemy.life*3.8)+'px'}"
          >{{enemy.life}}</div>
        </div>
      </div>
    </section>
    <section class="row controls">
      <div class="small-12 columns">
        <button @click="startGame" id="start-game">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls">
      <div class="small-12 columns">
        <button @click="playerAttack(5)" id="attack" :disabled="disableButton">ATTACK</button>
        <button
          @click="playerAttack(10)"
          id="special-attack"
          :disabled="disableButton"
        >SPECIAL ATTACK</button>
        <button id="heal">HEAL</button>
        <button @click="enemyAttack(player.life)" id="give-up">GIVE UP</button>
      </div>
    </section>
    <section class="row log">
      <div class="small-12 columns">
        <ul>
          <li :key="log" v-for="log in logs" :style="{backgroundColor: log.color}">{{log.text}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: { life: 100, name: "PLAYER", color: "blue" },
      enemy: { life: 100, name: "MONSTER", color: "red" },
      disableButton: false,
      logs: []
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
    startGame() {
      this.player.life = 100;
      this.enemy.life = 100;
      this.logs = [];
    },
    playerAttack(scaleFactore) {
      this.disableButton = true;
      let attack = Math.floor(Math.random() * scaleFactore + 10);
      if (this.enemy.life < attack) {
        this.enemy.life = 0;
        setTimeout(function() {
          alert("You win!");
        }, 500);
      } else {
        this.enemy.life -= attack;
        this.setlog(this.player.name, attack);
      }
      if (this.enemy.life >= 0) {
        let vm = this;
        setTimeout(function() {
          vm.enemyAttack();
        }, 1000);
      }
    },

    enemyAttack(customValue = null) {
      let attack = 0;
      if (customValue === null) {
        attack = Math.floor(Math.random() * 7 + 10);
      } else {
        attack = customValue;
      }

      if (this.player.life <= attack) {
        this.player.life = 0;
        setTimeout(function() {
          alert("You lose!");
        }, 500);
      } else {
        this.player.life -= attack;
        this.setlog(this.enemy.name, attack);
      }
      let vm = this;
      setTimeout(function() {
        vm.disableButton = false;
      }, 200);
    },
    setlog(name, points) {
      if (name === this.player.name) {
        this.logs.push({
          text:
            this.player.name + " hits " + this.enemy.name + " for " + points,
          color: this.player.color
        });
      } else {
        this.logs.push({
          text:
            this.enemy.name + " hits " + this.player.name + " for " + points,
          color: this.enemy.color
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
