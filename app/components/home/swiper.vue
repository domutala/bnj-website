<script setup lang="ts">
import { onMounted, ref } from "vue";

const sliderRef = ref<HTMLDivElement | null>(null);
const prevRef = ref<HTMLButtonElement | null>(null);
const nextRef = ref<HTMLButtonElement | null>(null);

onMounted(() => {
  const colors = ["#EADDFF", "#FFDAD6", "#D0BCFF", "#F2B8B5"];

  const slider = sliderRef.value!;
  const slides = Array.from(
    slider.querySelectorAll<HTMLElement>(".slider__slide"),
  );

  const prev = prevRef.value!;
  const next = nextRef.value!;

  slides.forEach((slide, index) => onCLick(index));

  const slidesCount = slides.length;
  const slidesToShow = 4;

  slides.forEach((slide) => slide.classList.add("hidden"));

  for (const [index, slide] of slides.entries()) {
    if (index < slidesToShow) {
      slide.classList.remove("hidden");

      if (index === 0) {
        slide.classList.add("wide");
      } else {
        slide.classList.add("narrow");
      }

      if (index < slidesToShow - 1) {
        slide.classList.add("gap");
      }
    }
  }

  function onCLick(index: number) {
    slides.forEach((slide) => slide.classList.remove("wide", "narrow"));
  }

  prev.disabled = true;

  next.addEventListener("click", onNext);
  prev.addEventListener("click", onPrev);

  function onNext() {
    if (prev.disabled) prev.disabled = false;

    const visible = slides.filter(
      (slide) =>
        slide.classList.contains("wide") || slide.classList.contains("narrow"),
    );

    const lastVisible = visible[visible.length - 1];
    if (!lastVisible) return;

    if (lastVisible.classList.contains("wide")) {
      rewriteNext(visible);
      return;
    }

    const currentWide = slider.querySelector<HTMLElement>(".wide")!;
    currentWide.classList.replace("wide", "narrow");

    const nextSlide = currentWide.nextElementSibling as HTMLElement;
    nextSlide.classList.replace("narrow", "wide");
  }

  function rewriteNext(visible: HTMLElement[]) {
    visible.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.remove("narrow", "gap");
        slide.classList.add("hidden");
      }

      if (index === visible.length - 1) {
        slide.classList.replace("wide", "narrow");
        slide.classList.add("gap");

        const nextSlide = slide.nextElementSibling as HTMLElement;
        nextSlide.classList.remove("hidden");
        nextSlide.classList.add("wide");
      }
    });
  }

  function onPrev() {
    if (next.disabled) next.disabled = false;

    const visible = slides.filter(
      (slide) =>
        slide.classList.contains("wide") || slide.classList.contains("narrow"),
    );

    const firstVisible = visible[0];
    if (!firstVisible) return;

    if (firstVisible.classList.contains("wide")) {
      rewritePrev(visible);
      return;
    }

    const currentWide = slider.querySelector<HTMLElement>(".wide")!;
    currentWide.classList.replace("wide", "narrow");

    const prevSlide = currentWide.previousElementSibling as HTMLElement;
    prevSlide.classList.replace("narrow", "wide");
  }

  function rewritePrev(visible: HTMLElement[]) {
    visible.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.replace("wide", "narrow");
        slide.classList.add("gap");

        const prevSlide = slide.previousElementSibling as HTMLElement;
        prevSlide.classList.remove("hidden");
        prevSlide.classList.add("wide");
      }

      if (index === visible.length - 1) {
        slide.classList.remove("narrow", "gap");
        slide.classList.add("hidden");
      }
    });
  }
});
</script>

<template>
  <div class="wrapper">
    <div class="slider" ref="sliderRef">
      <div class="slider__track">
        <div
          v-for="n in 4"
          :key="n"
          class="slider__slide border border-default rounded-2xl"
        >
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  inline-size: min(1024px, 100%);
  margin-inline: auto;
  padding-inline: 16px;
}

.slider {
  overflow: hidden;

  &__track {
    display: flex;
    margin-block-end: 10px;
  }

  &__slide {
    flex-basis: 0;
    block-size: 340px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 56px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);

    cursor: pointer;

    opacity: 0.6;

    transition:
      flex-grow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      margin-inline-end 0.3s ease,
      opacity 0.3s ease,
      transform 0.2s ease,
      box-shadow 0.3s ease;

    &.wide {
      flex-grow: 1;
      opacity: 1;
    }

    &.narrow {
      flex-grow: 0.25;
    }

    &.gap {
      margin-inline-end: 10px;
    }

    &.hidden {
      display: none;
    }

    &:active {
      transform: scale(0.97);
    }
  }
}
</style>
