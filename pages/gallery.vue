

<template>
  <div class="gallery">
    <div class="slides-container">
      <div class="slides-inner">
        <div class="slide"><img alt="" title="" src="/gallery/01.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/02.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/03.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/04.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/05.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/06.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/07.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/08.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/09.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/10.jpg"></div>
        <div class="slide"><img alt="" title="" src="/gallery/11.jpg"></div>
      </div>
    </div>
    <div class="controls">
      <button id="prevButton">Prev</button>
      <button id="nextButton">Next</button>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
onMounted(() => {


  gsap.registerPlugin(Draggable);
  const isMobile = window.matchMedia("(max-width: 768px)");
  let slideDelay = 1.5,
    slideDuration = 0.3,
    slides = gsap.utils.toArray(".slide"),
    numSlides = slides.length,
    progressPerItem = 1 / (numSlides - 1),
    threshold = progressPerItem / 5,
    snapProgress = gsap.utils.snap(progressPerItem),
    snapProgressDirectional = (value, direction) => {
      let snapped = snapProgress(value);
      if (direction < 0 && value - snapped > threshold) {
        return snapped + progressPerItem;
      } else if (direction > 0 && snapped - value > threshold) {
        return snapped - progressPerItem;
      }
      return snapped;
    },
    slideWidth,
    totalWidth,
    slideAnimation,
    animation = gsap.to(slides, 1, {
      xPercent: "-=" + (numSlides - 1) * 100,
      //duration: 1,
      ease: "none",
      paused: true
    }),
    draggable = new Draggable(document.createElement("div"), {
      // use a proxy element
      type: "x",
      edgeResistance: 0.9,
      dragResistance: 0.0,
      trigger: ".slides-container",
      onPress() {
        gsap.killTweensOf(animation);
        this.startProgress = animation.progress();
      },
      onDrag() {
        let change = (draggable.startX - draggable.x) / totalWidth;
        animation.progress(draggable.startProgress + change);
      },
      onRelease() {
        gsap.to(animation, {
          progress: snapProgressDirectional(
            animation.progress(),
            this.deltaX > 0 ? 1 : -1
          ),
          duration: slideDuration,
          overwrite: true
        });
      }
    });

  function animateSlides(direction) {
    let progress = snapProgress(
      animation.progress() + direction * progressPerItem
    );
    if (progress >= 0 && progress <= 1) {
      slideAnimation = gsap.to(animation, {
        progress: progress,
        duration: slideDuration,
        overwrite: true
      });
    }
  }

  function resize() {
    slideWidth = slides[0].offsetWidth;
    totalWidth = slideWidth * numSlides;

    if (isMobile.matches) {
      animation.progress(0);
      draggable.startProgress = animation.progress();
    }
  }

  resize();

  window.addEventListener("resize", resize);
  document
    .querySelector("#prevButton")
    .addEventListener("click", () => animateSlides(-1));
  document
    .querySelector("#nextButton")
    .addEventListener("click", () => animateSlides(1));



});



</script>

<style>
button {
  cursor: pointer;
  padding: 8px 16px;
  margin: 10px 5px;
}

.gallery {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.controls {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  min-height: 70px;
}

.slides-container {
  position: relative;
  overflow: hidden;
  display: flex;
  flex: 1;
}

.slides-inner {
  display: flex;
}

.slide {
  font-size: 90px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
}

.slides-inner {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: visible;
}
</style>