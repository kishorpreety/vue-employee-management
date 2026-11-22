<script setup lang="ts">
import { ref } from "vue";

const message = ref("Home page is working!");
</script>

<template>
  <div>
    <h1>Employee Management Home</h1>
    <p>{{ message }}</p>
  </div>
</template>
