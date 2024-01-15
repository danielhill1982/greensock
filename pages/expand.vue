<template>
    <div class="expo h-1 w-1 left-0 bg-slate-500"></div>
</template>

<script setup>
import { gsap } from 'gsap';



onMounted(() => {
 
    gsap.to(".expo", { width: 300, duration: 3, repeat: -1 })



});


</script>


  

  