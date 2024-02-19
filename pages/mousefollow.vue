

<template>
   
   <div id="cursor-follow">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
 </div>

</template>


<script setup lang="ts">
import { gsap } from 'gsap';



onMounted(() => {

  document.addEventListener("mousemove", (ev) => {
  const x = ev.clientX,
    y = ev.clientY;

  // lag cursor behind mouse
  gsap.to("#cursor-follow > span", {
    duration: (i) => 0.2 + i/10,
    scale: (i) => 2 - i/10,
    x,
    y
  });

});
});


</script>
<style>


#cursor-follow > span {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 6px;
  pointer-events: none;
  user-select: none;
  backdrop-filter: invert(100%);
}
</style>