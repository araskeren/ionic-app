import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 10,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
