

<template>
  <div class="text-wrapper bg-slate-900 text-slate-100 relative w-96 h-48 mx-auto p-1">
    <p class="text-3xl absolute p-14"></p>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

onMounted(() => {
  gsap.registerPlugin(TextPlugin);
  gsap.to(".text-wrapper p", {
    text: "Typewriter effect with GSAP 3",
    duration: 2,
    ease: 'power1.out',
    yoyo: false
  });



});



</script>