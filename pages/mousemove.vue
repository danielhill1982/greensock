
<template>
    <section class="header-banner mt-20">
        <h1>Hello World !</h1>
        <div>
            <p>Here's a description</p>
        </div>
    </section>
</template>


<script setup lang="ts">
import { gsap } from 'gsap';



onMounted(() => {
    let mouseX, mouseY;

    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Add GSAP Effect
        gsap.to(".header-banner", {
            // The '30' value bellow corresponds to the effect power, change it as you want
            x: (mouseX / window.innerWidth - 0.5) * 180,
            y: (mouseY / window.innerHeight - 0.5) * 90,
            delay: 0.1,
            ease: "power2.out",
            overwrite: "auto"
        });
    });






});


</script>
  