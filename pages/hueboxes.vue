<template>
    
    <div class="flex flex-row mx-auto bg-carbon p-1 w-full">
      <div class="basis-1/6 huebox w-40 h-40 inline-block m-2"></div>
      <div class="basis-1/6 huebox w-40 h-40 inline-block m-2"></div>
      <div class="basis-1/6 huebox w-40 h-40 inline-block m-2"></div>
      <div class="basis-1/6 huebox w-40 h-40 inline-block m-2"></div>
      <div class="basis-1/6 huebox w-40 h-40 inline-block m-2"></div>
      <div class="basis-1/6 huebox w-40 h-40 inline-block m-2"></div>
    </div>

</template>

<script setup lang="ts">
import { gsap } from 'gsap';
onMounted(() => {
  gsap.fromTo(".huebox", {
    backgroundColor: function (index, _target, targets) {
      return "hsl(" + ((index / targets.length) * 180) + ", 100%, 50%)";
    }
  }, {
    backgroundColor: "hsl(-=360, +=0%, +=0%)",
    duration: 10,
    repeat: -1,
    ease: "none"
  });
});

</script>

