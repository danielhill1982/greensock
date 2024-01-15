<template>
    <div class="boxy w-52 h-52 bg-slate-500 blur-xl opacity-0"></div>
</template>


<script setup>
import { gsap } from 'gsap';



onMounted(() => {
       

// gsap.from(".boxy", { duration: 1, opacity: 1, filter: "blur(20px)" });

// Or Timeline:

        // Select the element you want to animate
        const box = document.querySelector(".boxy");

        // Create a GSAP timeline
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        // Animate the blur and opacity
        tl.to(box, { opacity: 1, filter: "blur(0px)" });

        // You can add more animations or other effects here as needed

        // Trigger the timeline to play
        tl.play();
    


});


</script>
