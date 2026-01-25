<script lang="ts" setup>
const appConfig = useAppConfig();
const title = appConfig.site.name;
const description = appConfig.site.description;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
});

onMounted(() => {
  useCookieConsent().init();
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" :height="5" />

    <ui-header v-if="!$slots.header" />
    <slot name="header" />

    <slot />

    <ui-footer v-if="!$slots.footer" />
    <slot name="footer" />
  </UApp>
</template>
