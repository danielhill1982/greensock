<template>
  <div class="text-center bg-slate-800 h-40 w-80 p-20">
  <h1 class="shinytarget text-slate-200">Blinking Text</h1>
</div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';



onMounted(() => {
    // Create a GSAP animation timeline
const tl = gsap.timeline({ repeat: -1, yoyo: true });

// Define the animation
tl.to(".shinytarget", {
  duration: 0.5,
  opacity: 0.8,
  ease: "power1.inOut",
  repeat: 1,
  yoyo: true,
  repeatDelay: 0.5,
  textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff",
});

// Start the animation
tl.play();


    


});


</script>


  