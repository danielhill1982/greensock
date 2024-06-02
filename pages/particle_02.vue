<template>
    <div id="particles-container"></div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
onMounted(() => {
const particlesContainer = document.getElementById("particles-container");

interface Particle {
	element: HTMLDivElement;
	x: number;
	y: number;
	dx: number;
	dy: number;
	radius: number;
	color: string;
}

const particles: Particle[] = [];
const particleCount = 100;
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

function createParticle() {
	const particle = document.createElement("div");
	particle.style.position = "absolute";
	particle.style.borderRadius = "50%";
	particlesContainer?.appendChild(particle);

	const radius = Math.random() * 10 + 5;
	const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

	const x = Math.random() * (containerWidth - radius * 2) + radius;
	const y = Math.random() * (containerHeight - radius * 2) + radius;
	const dx = (Math.random() - 0.5) * 4;
	const dy = (Math.random() - 0.5) * 4;

	particle.style.width = `${radius * 2}px`;
	particle.style.height = `${radius * 2}px`;
	particle.style.backgroundColor = color;

	return { element: particle, x, y, dx, dy, radius, color };
}

function initializeParticles() {
	for (let i = 0; i < particleCount; i++) {
		particles.push(createParticle());
	}
}

function animateParticles() {
	particles.forEach((particle) => {
		particle.x += particle.dx;
		particle.y += particle.dy;

		if (
			particle.x - particle.radius < 0 ||
			particle.x + particle.radius > containerWidth
		) {
			particle.dx = -particle.dx;
		}

		if (
			particle.y - particle.radius < 0 ||
			particle.y + particle.radius > containerHeight
		) {
			particle.dy = -particle.dy;
		}

		gsap.set(particle.element, {
			x: particle.x - particle.radius,
			y: particle.y - particle.radius
		});
	});

	requestAnimationFrame(animateParticles);
}

initializeParticles();
animateParticles();
});
</script>


<style>
#particles-container {
    position: absolute;
	width: 100%;
	height: 300px;
    overflow: hidden;
}
</style>