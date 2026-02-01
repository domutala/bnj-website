<script lang="ts" setup>
const appConfig = useAppConfig();
const title = appConfig.site.name;
const i18n = useI18n();
useSeoMeta({
  title: `${title} - ${i18n.t("site.description")}`,
  description: i18n.t("site.description"),
  ogTitle: `${title} - ${i18n.t("site.description")}`,
  ogDescription: i18n.t("site.description"),
  // ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
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
