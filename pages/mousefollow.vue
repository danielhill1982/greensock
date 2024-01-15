

<template>
   
  <div class="boxed w-96 h-96 bg-slate-300 relative">
    <div class="follower bg-sky-400 w-14 h-14 rounded-full absolute opacity-0"></div>
  </div>

</template>


<script setup>
import { gsap } from 'gsap';



onMounted(() => {

const follower = document.querySelector(".follower");
gsap.set(follower, {
  opacity: 1,
  scale: 0,
  transformOrigin: "center center",
  xPercent: -50,
  yPercent: -50
});
const xTo = gsap.quickTo(follower, "x", { ease: "power3" });
const yTo = gsap.quickTo(follower, "y", { ease: "power3" });

const box = document.querySelector(".boxed");
const boxPosition = box.getBoundingClientRect().x;
const boxLeft = box.getBoundingClientRect().x;
const boxTop = box.offsetTop;

box.addEventListener("mousemove", (e) => {
  console.log(e.pageY, e.clientY, boxTop);
  xTo(e.clientX - boxLeft);
  yTo(e.pageY - boxTop);
});

box.addEventListener("mouseenter", () => {
  gsap.to(follower, {
    duration: 0.3,
    opacity: 1,
    scale: 1,
    transformOrigin: "center center"
  });
});

box.addEventListener("mouseleave", () => {
  gsap.to(follower, {
    duration: 0.3,
    opacity: 0,
    scale: 0,
    transformOrigin: "center center"
  });
});



});


</script>
  