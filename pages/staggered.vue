<template>
    <div>
        <div class="max-w-[60rem] mx-auto">

            <div class="px-4 sm:px-6 lg:px-8">

                <div class="mt-5 mb-32 max-w-3xl text-center mx-auto">
                    <div class="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
                        <div class="my-24 max-w-2xl text-center mx-auto">
                            <hr class="expo block border-4 mx-auto rounded border-green-500">
                            <h1 class="flow block font-bold text-green-500 text-3xl md:text-4xl lg:text-5xl my-4">Intuitive
                                <br><span class="text-blue-500">Web Solutions</span>
                            </h1>
                            <hr class="expo block border-4 mx-auto rounded border-blue-500">
                        </div>

                        <p
                            class="hero-text bg-clip-text bg-gradient-to-tl from-blue-500 to-green-500 text-transparent leading-normal">
                            Consulting</p>
                        <p
                            class="hero-text bg-clip-text bg-gradient-to-tl from-blue-500 to-green-500 text-transparent leading-normal">
                            Conception</p>
                        <p
                            class="hero-text bg-clip-text bg-gradient-to-tl from-blue-500 to-green-500 text-transparent leading-normal">
                            Logo Design</p>
                        <p
                            class="hero-text bg-clip-text bg-gradient-to-tl from-blue-500 to-green-500 text-transparent leading-normal">
                            UI/UX Design</p>
                        <p
                            class="hero-text bg-clip-text bg-gradient-to-tl from-blue-500 to-green-500 text-transparent leading-normal">
                            Software Development</p>

                    </div>











                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { gsap } from 'gsap';

onMounted(() => {

    gsap.fromTo(".expo", {
        width: 0,

    },
        {
            width: 195,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power4.out"
        });

    gsap.fromTo(".flow", {
        opacity: 0,
        filter: "blur(24px)",
    },
        {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power4.out"
        });


    var timeline = gsap.timeline({ repeat: -1 });

    timeline.fromTo(
        ".hero-text",
        { y: "50px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.5 },
        "+=1"
    );

    timeline.to(".hero-text", { opacity: 0, delay: 4 }, "+=1");

});
</script>