import { event } from '../assets/events/events.json';
import { defineStore } from 'pinia';

export const useCalStore = defineStore('counter', {
  state: () => ({ 
    events: event,
   }),
  getters: {

  },
  actions: {

  }
});
