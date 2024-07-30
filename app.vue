

<template>
    <div>
    <div class="h-10 flex m-2">


  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Navi" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>


</div>
    <div class="flex justify-center mt-20">
        <NuxtPage/>   
    </div></div>
</template>


<script setup lang="ts">


const items = [
[{
    label: 'Start',
    to: '/'
}, {
    label: 'Slide',
    to: '/slide/'
}, {
    label: 'Jumping',
    to: '/jumping/'
}, {
    label: 'Typewriter',
    to: '/typewriter/'
}, {
    label: 'Bounty',
    to: '/bounty/'
}, {
    label: 'Expand',
    to: '/expand/'
}, {
    label: 'Float',
    to: '/float/'
}, {
    label: 'Mouse Move',
    to: '/mousemove/'
}, {
    label: 'Magnetic Underline',
    to: '/magneticunderline/'
}, {
    label: 'Blinking Text',
    to: '/blinkingtext/'
}, {
    label: 'Mouse Hue',
    to: '/mousehue/'
}, {
    label: 'Hue Boxes',
    to: '/hueboxes/'
}, {
    label: 'Reveal',
    to: '/reveal/'
}, {
    label: 'Mouse Follow',
    to: '/mousefollow/'
}, {
    label: 'Staggered Text',
    to: '/staggered/'
}, {
    label: 'Particle 01',
    to: '/particle_01/'
}, {
    label: 'Particle 02',
    to: '/particle_02/'
}]
]

</script>