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

const icons = [
  "i-lucide-folder-edit",
  "i-lucide-building",
  "i-lucide-briefcase-business",
];
</script>

<template>
  <ui-section heade-color="white" class="py-32 bg-white text-black w-full">
    <u-container class="max-w-">
      <div class="flex gap-2 relative mx-auto justify-center">
        <div class="h-190 relative group lg:w-full sm:w-140 w-full">
          <img
            src="/images/u_3.jpg"
            class="object-cover object-top w-full h-full inset-0 transition-all rounded-2xl"
          />

          <div
            class="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 lg:translate-none lg:left-6/10 flex flex-col gap-2 w-10/12"
          >
            <div
              v-for="i in 3"
              :key="i"
              class="relative py-5 px-7 z-10 bg-white/50 backdrop-blur-3xl rounded-2xl shadow-sm border border-black/15 flex items-center gap-5"
            >
              <u-icon :name="icons[i - 1]" class="size-10 opacity-50" />

              <div class="leading-[1.1] ml-3">
                <div class="text-4xl">
                  {{ $t(`home.stats.list.${i - 1}.count`) }}
                </div>
                <div class="md:whitespace-nowrap">
                  {{ $t(`home.stats.list.${i - 1}.title`) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-180 w-full relative group hidden lg:block text-right">
          <div class="pl-10 mt-15">
            <UIcon name="i-lucide-user-star" class="size-24 mb-5" />
            <h2
              class="text-2xl sm:text-3xl font-semibold mx-auto max-w-200"
              v-html="$t('home.stats.title')"
            ></h2>
          </div>
        </div>
      </div>
    </u-container>
  </ui-section>
</template>
