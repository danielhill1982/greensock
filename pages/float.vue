<template>
    <div class="floating-element h-28 w-28 bg-slate-700 rounded-full text-center text-slate-50 text-bold uppercase"></div>
</template>


<script setup>
import { gsap } from 'gsap';



onMounted(() => {


    // select the element to be animated
    const element = document.querySelector(".floating-element");

    // use GSAP to animate the element's position
    gsap.to(element, {
        duration: 1.5, // duration of the animation (in seconds)
        yoyo: true, // repeat the animation in reverse
        repeat: -1, // repeat indefinitely
        ease: "power1.inOut", // easing function for the animation
        y: 25, // amount to move the element on the Y-axis
    });
    


});


</script>
  