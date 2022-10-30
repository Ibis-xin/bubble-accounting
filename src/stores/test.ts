import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    value: 0,
  }),
  actions: {
    addValue() {
      this.value++;
    },
  },
});
