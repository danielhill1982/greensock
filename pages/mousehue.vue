<template>
<canvas id="myCanvas" width="800" height="600"></canvas>

</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx === null) {
    console.error('2D-Kontext konnte nicht erstellt werden');
    return;
}

const colors: string[] = [
    "#f44336",
    "#E91E63",
    "#673ab7",
    "#03a9f4",
    "#009688"
];

const widthToColor = gsap.utils.pipe(
    gsap.utils.snap({ values: [0, canvas.width], radius: 100 }),
    gsap.utils.mapRange(0, canvas.width, 0, 1),
    gsap.utils.interpolate(colors)
);

const onMove = (mouseX: number): void => {
    ctx.fillStyle = widthToColor(mouseX);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("pointermove", (e: PointerEvent) => onMove(e.offsetX));
onMove(0);


});

</script>