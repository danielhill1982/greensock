

<template>
    <div class="bounty w-20 h-20 bg-slate-400"></div>

</template>


<script setup>
import { gsap } from 'gsap';



onMounted(() => {
    gsap.from(".bounty", { x: 400, y: 600, duration: 3, ease: "bounce" });

    
    
    

});


</script>


  

  