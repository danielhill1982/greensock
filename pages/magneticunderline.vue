<template>
    <div>
        <ul class="nav relative flex text-slate-500">
            <li class="text-xl p-3 text-center m-3 cursor-pointer">home</li>
            <li class="text-xl p-3 text-center m-3 cursor-pointer">about</li>
            <li class="text-xl p-3 text-center m-3 cursor-pointer">work</li>
            <li class="text-xl p-3 text-center m-3 cursor-pointer">blog</li>
            <li class="text-xl p-3 text-center m-3 cursor-pointer">contact</li>
        </ul>
        <div class="line absolute h-0.5 bg-slate-500"></div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

onMounted(() => {

    const navItems = gsap.utils.toArray<HTMLLIElement>(".nav li")
                                    
    let currentItem = navItems[0]

    function initNav() {
        gsap.set(".line", { x: currentItem.offsetLeft, width: currentItem.clientWidth })
    }


    navItems.forEach((element, index) => {
        element.addEventListener("mouseenter", function () {
            gsap.to(".line", { duration: 0.3, overwrite: true, x: element.offsetLeft, width: element.clientWidth })
            currentItem = element
        }); // added overwrite for best performance
    });

    window.addEventListener("resize", initNav);

    initNav()

    gsap.to(".line", { autoAlpha: 1, duration: 0.2 })

});
</script>
  