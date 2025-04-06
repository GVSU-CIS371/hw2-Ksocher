import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import type { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    beverages: [] as BeverageType[],
  }),

  actions: {
    makeBeverage(name: string) {
      const newBeverage: BeverageType = {
        id: '${name}-${Date.now()}',
        name,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      }
      this.beverages.push(newBeverage);
    },
    showBeverage() {
      console.log(this.beverages);
    },
  },
  persist: true,
});
