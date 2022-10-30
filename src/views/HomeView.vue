<template>
  <hello-world />

  <div>{{ counterStore.count }}</div>
  <button @click="counterStore.increment">click</button>

  <div>{{ testStore.value }}</div>
  <button @click="testStore.addValue">++</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter";
import { useTestStore } from "@/stores/test";
import HelloWorld from "../components/HelloWorld.vue";

const counterStore = useCounterStore();
const testStore = useTestStore();
</script>
