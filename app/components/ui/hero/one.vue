<script setup lang="ts">
const containerRef = ref(null);
const activeIndex = ref<number>(0);
const slideProgress = ref(0);

const swiper = useSwiper(containerRef, {
  loop: true,
  navigation: false,
  slidesPerView: "auto",
  spaceBetween: 0,
  slidesOffsetBefore: 0,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  on: {
    autoplayTimeLeft(swiperInstance, timeLeft: number, progress: number) {
      slideProgress.value = Math.round(100 - progress * 100);
    },

    slideChange(swiperInstance) {
      const newIndex = swiperInstance.realIndex;
      activeIndex.value = newIndex;
    },
  },
});

function goToSlide(index: number): void {
  if (!swiper.instance.value) return;
  swiper.instance.value.slideToLoop(index);
}
</script>

<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="">
        <swiper-slide class="w-screen h-screen">
          <div class="size-full relative">
            <img
              src="https://i.pinimg.com/1200x/76/4e/d1/764ed1ea4fd89996ca25e1895403dbc9.jpg"
              class="absolute inset-0 object-cover object-center w-full"
            />
          </div>
        </swiper-slide>

        <swiper-slide class="w-screen h-screen">
          <div class="size-full relative">
            <img
              src="https://i.pinimg.com/1200x/5e/31/e4/5e31e486b051679059cdfc2ab98a68f1.jpg"
              class="absolute inset-0 object-cover object-top w-full h-full"
            />
          </div>
        </swiper-slide>

        <swiper-slide class="w-screen h-screen">
          <div class="size-full relative">
            <img
              src="https://i.pinimg.com/736x/01/57/17/015717379e102c3b8e0546b2208e14ad.jpg"
              class="absolute inset-0 object-cover object-center w-full h-full"
            />
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <div
      class="size-full bg-black/50 absolute top-0 left-0 z-10 flex text-white"
    >
      <u-container class="mt-70">
        <div class="flex items-center gap-1 relative mb-5">
          <div
            v-for="i in 3"
            :key="i"
            class="w-13 bg-white/50 h-1 cursor-pointer"
            @click="goToSlide(i - 1)"
          >
            <div
              class="h-full bg-white"
              :style="{
                width: `${i - 1 === activeIndex ? slideProgress : 0}%`,
              }"
            ></div>
          </div>
        </div>

        <!-- <h1 v-if="activeIndex === 0">
          <div class="text-6xl md:text-6xl">
            <div>Penser vite.</div>
            <div>Construire mieux.</div>
          </div>
        </h1>

        <h1 v-if="activeIndex === 1">
          <div class="text-6xl md:text-6xl">
            <div>Créer avec intention.</div>
            <div>Livrer avec précision.</div>
          </div>
        </h1> -->

        <div class="max-w-200">
          <h1>
            <div class="text-3xl md:text-6xl">
              Externalisez votre équipe en réduisant vos coûts dans un temps
              record
            </div>
          </h1>

          <u-button
            color="neutral"
            variant="ghost"
            size="xl"
            class="mt-7 border border-default group"
          >
            <span class="text-inverted group-hover:text-white"
              >Découvrir notre formule
            </span>
          </u-button>
        </div>
      </u-container>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  height: auto;
  background-color: red;
}
</style>
