<template>
  <div>
    <Beverage 
    :isIced="beverageStore.currentTemp === 'Cold'" 
    :baseColor="selectedBaseColor"
    :creamerColor="beverageStore.currentCreamer.color"
    :syrupColor="beverageStore.currentSyrup.color"
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
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base.name"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="cream in beverageStore.creamers" :key="cream.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${cream.id}`"
              :value="cream.name"
              v-model="beverageStore.currentCreamer"
            />
            {{ cream.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup.name"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" />
    <button @click="createBeverage">🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { ref } from "vue";

const beverageStore = useBeverageStore();
const beverageName = ref("");

function createBeverage() {
  beverageStore.makeBeverage(beverageName.value);
  beverageName.value = "";
}

import { computed } from "vue";

const selectedBaseColor = computed(() => {
  const base = beverageStore.bases.find((b) => b.name === beverageStore.currentBase.name);
  return base ? base.color : "transparent";
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
