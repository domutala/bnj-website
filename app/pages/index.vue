<script lang="ts" setup>
import UiHomeDescription from "~/components/home/description.vue";
import UiHomeTestimonials from "~/components/home/testimonials.vue";
import UiHomeService from "~/components/home/services.vue";
import UiHomeMarquee from "~/components/home/marquee.vue";
import UiHomeHero from "~/components/home/hero.vue";
import UiHomeCeo from "~/components/home/ceo.vue";
import UiHomeStats from "~/components/home/stats.vue";
import UiHomeProfile from "~/components/home/profile.vue";

const { setColor } = useHeader();
setColor("white");
</script>

<template>
  <div class="relative flex flex-col items-center justify-center">
    <ui-section class="w-full bg-black text-white" heade-color="white">
      <UiHomeHero />
      <UiHomeMarquee />
      <UiHomeProfile />
    </ui-section>

    <div class="relative w-full">
      <div
        class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-primary/30"
      ></div>
    </div>

    <UiHomeService />

    <UiHomeCeo />
    <!-- 
    -->
    <UiHomeDescription />

    <div class="relative w-full">
      <div
        class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-primary"
      ></div>
    </div>

    <UiHomeTestimonials />

    <UiHomeStats />

    <div class="relative w-full">
      <div
        class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-white/10"
      ></div>
    </div>

    <!-- <UiHomeService /> -->
  </div>
</template>
