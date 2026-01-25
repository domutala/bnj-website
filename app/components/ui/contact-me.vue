<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <u-modal>
    <slot />

    <template #content>
      <div class="p-10">
        <div class="flex items-center justify-center gap-2 mb-10">
          <img
            :src="'/images/004.png'"
            class="size-8 object-cover object-top rounded-full bg-black/10 dark:bg-white/10"
          />
          <div class="text-primary text-xl">@domutala</div>
        </div>

        <div class="flex flex-wrap items-center gap-10 justify-center">
          <a
            v-for="(social, s, i) in appConfig.socials"
            :key="s"
            :href="social"
            target="_blank"
            class="hover:text-primary flex items-center justify-center animate__fadeInUp animate__animated"
            :style="{ animationDelay: `${i * 150}ms` }"
          >
            <u-icon :name="`i-simple-icons-${s.split('.')[1]}`" size="48" />
          </a>
        </div>
      </div>
    </template>
  </u-modal>
</template>
