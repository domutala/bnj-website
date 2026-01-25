<script setup lang="ts">
const containerRef = ref(null);

const swiper = useSwiper(containerRef, {
  loop: false,
  navigation: false,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesOffsetBefore: 0,
  grabCursor: true,
});
</script>

<template>
  <section class="py-32 bg-black text-white w-full">
    <u-container class="mb-14">
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
          <swiper-slide class="min-w-100">
            <div class="h-180 rounded-2xl overflow-hidden relative group">
              <img
                src="/images/u_2.jpg"
                class="object-cover object-top w-full h-full absolute inset-0 group-hover:scale-125 transition-all"
              />
              <div class="size-full bg-black/35 absolute inset-0"></div>

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
                src="/images/u_3.jpg"
                class="object-cover object-top w-full h-full absolute inset-0 group-hover:scale-125 transition-all"
              />
              <div class="size-full bg-black/35 absolute inset-0"></div>

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
                src="/images/u_1.jpg"
                class="object-cover object-top w-full h-full absolute inset-0 group-hover:scale-125 transition-all"
              />
              <div class="size-full bg-black/35 absolute inset-0"></div>

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
