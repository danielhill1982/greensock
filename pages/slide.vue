<template>
  <div>
    <h1 class="inline-block border-4 p-4 border-slate-600 bg-slate-800 text-6xl text-red-600">Hello world</h1>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from('h1', { y: 600, duration: 2 });
});

</script>
