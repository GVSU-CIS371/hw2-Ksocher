<template>
  <div>
    <Beverage 
    :isIced="beverageStore.currentTemp === 'Cold'" 
    :baseColor="selectedBaseColor"
    :creamerColor="selectedCreamerColor"
    :syrupColor="selectedSyrupColor"
    />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base.name"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="cream in creamers" :key="cream.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${cream.id}`"
              :value="cream.name"
              v-model="currentCreamer"
            />
            {{ cream.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup.name"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" />
    <button>🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();

import { temps, currentTemp, bases, currentBase, creamers, currentCreamer, syrups, currentSyrup } from "./stores/beverage.ts";
import { computed } from "vue";

const selectedBaseColor = computed(() => {
  const base = bases.value.find((b) => b.name === currentBase.value);
  return base ? base.color : "transparent";
});

const selectedCreamerColor = computed(() => {
  const creamer = creamers.value.find((c) => c.name === currentCreamer.value);
  return creamer ? creamer.color : "transparent";
});

const selectedSyrupColor = computed(() => {
  const syrup = syrups.value.find((s) => s.name === currentSyrup.value);
  return syrup ? syrup.color : "transparent";
});

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
