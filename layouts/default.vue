
<script setup>

const links = [{
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
}]

</script>

<template>
    <div class="w-100 h-100">
        <div class="grid grid-rows-1 grid-flow-col gap-4">
            <div class="row-span-1">
                <UVerticalNavigation :links="links">
                    <template #default="{ link }">
                        <span class="group-hover:text-primary relative">{{ link.label }}</span>
                    </template>
                </UVerticalNavigation>
            </div>
            <div class="col-span-2">
                <div class="flex h-screen justify-center items-center">
                    <NuxtPage/>
                </div>
            </div>
        </div>
    </div>
</template>

