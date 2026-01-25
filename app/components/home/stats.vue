<script setup lang="ts">
const containerIntro = ref<any>();
const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  loop: false,
  navigation: false,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesOffsetBefore: 0,
  grabCursor: true,

  on: {
    init(e) {
      if (!containerIntro.value) return;
      if (!import.meta.client) return;

      // const el = containerIntro.value.$el as HTMLDivElement;
      // const gap = window.innerWidth - el.getBoundingClientRect().width;

      // e.params.slidesOffsetBefore = gap / 2;
      // e.params.slidesOffsetAfter = gap / 2;
      // e.update();
    },
  },
});
</script>

<template>
  <section class="py-32 bg-black text-white w-full">
    <u-container ref="containerIntro" class="mb-14">
      <div class="text-center">
        <!-- <u-icon name="i-lucide-crown" size="92" class="text-primary mb-3" /> -->
        <h2
          class="text-2xl sm:text-4xl font-bold mx-auto max-w-200"
          v-html="$t('home.stats.title')"
        ></h2>
      </div>
    </u-container>

    <ClientOnly>
      <u-container class="max-w-400">
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide class="h- min-w-100">
            <div class="h-180 rounded-2xl overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/1200x/5e/31/e4/5e31e486b051679059cdfc2ab98a68f1.jpg"
                class="object-cover object-top w-full h-full absolute inset-0 pointer-events-none group-hover:scale-125 transition-all"
              />
              <div
                class="size-full bg-black/35 absolute inset-0 pointer-events-none"
              ></div>

              <div class="absolute bottom-0 p-10 z-10">
                <div class="text-6xl">
                  {{ $t("home.stats.list.0.count") }}
                </div>
                <div>
                  {{ $t("home.stats.list.0.title") }}
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="h- min-w-100">
            <div class="h-180 rounded-2xl overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/736x/01/57/17/015717379e102c3b8e0546b2208e14ad.jpg"
                class="object-cover object-top w-full h-full absolute inset-0 pointer-events-none group-hover:scale-125 transition-all"
              />
              <div
                class="size-full bg-black/35 absolute inset-0 pointer-events-none"
              ></div>

              <div class="relative p-10 z-10">
                <div class="text-6xl">
                  {{ $t("home.stats.list.1.count") }}
                </div>
                <div>
                  {{ $t("home.stats.list.1.title") }}
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide class="h- min-w-100">
            <div class="h-180 rounded-2xl overflow-hidden relative group">
              <img
                src="https://i.pinimg.com/736x/d7/7c/96/d77c96408c521beee0dca194d9038194.jpg"
                class="object-cover object-top w-full h-full absolute inset-0 pointer-events-none group-hover:scale-125 transition-all"
              />
              <div
                class="size-full bg-black/35 absolute inset-0 pointer-events-none"
              ></div>

              <div class="relative p-10 z-10">
                <div class="text-6xl">
                  {{ $t("home.stats.list.2.count") }}
                </div>
                <div>
                  {{ $t("home.stats.list.2.title") }}
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </u-container>
    </ClientOnly>
  </section>
</template>

<style lang="scss">
.swiper-slide {
  height: auto;
  background-color: red;
}
</style>
