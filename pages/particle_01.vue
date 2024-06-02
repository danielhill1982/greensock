<template>
    
    <div class="particle-container overflow-hidden">
	

</div>

</template>

<script setup lang="ts">
import { gsap } from 'gsap';
onMounted(() => {
function createParticle() {
	const particle = document.createElement("div");
	particle.classList.add("particle");
	const particleContainer = document.querySelector(".particle-container");
	if (particleContainer) {
		particleContainer.appendChild(particle);

		const size = Math.random() * 20 + 80;
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * window.innerHeight;

		gsap.set(particle, {
			width: size,
			height: size,
			x: x,
			y: y,
			opacity: 0
		});

		gsap.to(particle, {
			duration: Math.random() * 3 + 1,
			x: x + Math.random() * 200 - 100,
			y: y + Math.random() * 200 - 100,
			opacity: 1,
			scale: 0,
			ease: "power2.out",
			onComplete: () => {
				particle.remove();
				createParticle();
			}
		});
	}
}

for (let i = 0; i < 20; i++) {
	createParticle();
}
});
</script>

<style>
.particle-container {
	position: absolute;
	width: 100%;
	height: 300px;
	background-color: #121212;
}

.particle {
	position: absolute;
	background-color: #741b86;
	border-radius: 50%;
	transform-origin: center;
}
</style>