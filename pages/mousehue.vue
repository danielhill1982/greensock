<template>
<canvas id="myCanvas" width="2000"></canvas>

</template>

<script setup lang="ts">
import { gsap } from 'gsap';

onMounted(() => {

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx === null) {
    console.error('2D-Kontext konnte nicht erstellt werden');
    return;
}

const colors: string[] = [
    "#ff3300",
    "#FFFF00",
    "#FF00FF",
	"#0099ff",
	"#009900"
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