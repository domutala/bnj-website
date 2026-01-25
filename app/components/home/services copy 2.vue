<script setup lang="ts">
const containerRef = ref(null);
const activeIndex = ref<number>(0);
const slideProgress = ref(0);

const colors = [
  "color-success-900",
  "error",
  "color-primary-700",
  "color-warning-700",
];

const swiper = useSwiper(containerRef, {
  loop: true,
  navigation: false,
  slidesPerView: 1,
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
  <!-- w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 -->
  <div class="relative w-full h-screen overflow-hidden bg-black text-white">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false">
        <swiper-slide v-for="i in 4" :key="i" class="w- h-screen">
          <div class="relative overflow-hidden size-full">
            <u-icon
              :name="$t(`services.list.${i - 1}.icon`)"
              :style="{ color: `var(--ui-${colors[i - 1]})` }"
              class="absolute -bottom-2/5 right-0 size-300 opacity-12"
            />

            <div class="size-full relative mt-88">
              <u-container class="">
                <h3 class="text-3xl md:text-6xl">
                  {{ $t(`services.list.${i - 1}.title`) }}
                </h3>

                <p class="mt-5 text-2xl max-w-150">
                  {{ $t(`services.list.${i - 1}.description`) }}
                </p>
              </u-container>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <div
      class="w-full top-0 left-0 z-10 text-white pointer-events-none absolute"
    >
      <u-container class="">
        <div class="flex">
          <div class="w-1/2">
            <u-container class="mt-30">
              <div class="text-">
                <u-icon
                  name="i-lucide-laptop-minimal-check"
                  size="92"
                  class="text-primary mb-3"
                />
                <h2 class="text-2xl sm:text-4xl font-bold mx-auto">
                  {{ $t("services.title") }}
                </h2>

                <p class="mt-5 text-xl">
                  {{ $t("services.description") }}
                </p>
              </div>
            </u-container>
          </div>

          <div
            class="flex items-center gap-1 relative mb-5 pointer-events-auto mt-70 w-1/2"
          >
            <div v-for="i in 4" :key="i">
              <div class="size-13">
                <u-icon
                  v-if="i - 1 === activeIndex"
                  :name="$t(`services.list.${i - 1}.icon`)"
                  :style="{ color: `var(--ui-${colors[i - 1]})` }"
                  class="size-10 opacity- mx-auto flex items-center justify-center"
                />
              </div>

              <div
                class="w-13 bg-white/50 h-1 cursor-pointer"
                @click="goToSlide(i - 1)"
              >
                <div
                  class="h-full bg-white"
                  :style="{
                    width: `${i - 1 === activeIndex ? slideProgress : 0}%`,
                    backgroundColor: `var(--ui-${colors[i - 1]})`,
                  }"
                ></div>
              </div>
            </div>
          </div>
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
