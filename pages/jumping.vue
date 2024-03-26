

<template>
    <div>
        <div class="ball bg-slate-400 h-32 w-32 inline-block rounded-full m-3 relative">
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

onMounted(() => {
    const balls = document.querySelectorAll(".ball");

    gsap.to(balls, {
        duration: 0.5,
        scale: 0.1,
        y: 100,
        ease: "power4.in",
        repeat: -1,
        yoyo: true
    });





});



</script>

