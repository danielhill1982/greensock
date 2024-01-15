

<template>
    <div>
        <div class="ball bg-slate-400 h-32 w-32 inline-block rounded-full m-3 relative">
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';

onMounted(() => {
    const balls = document.querySelectorAll(".ball");

    gsap.to(balls, {
        duration: 2,
        scale: 0.1,
        ease: "power4.in",
        repeat: -1,
        yoyo: true
    });





});



</script>

