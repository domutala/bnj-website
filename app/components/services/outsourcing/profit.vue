<script setup lang="ts">
const cards = ref([
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },

  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);
</script>

<template>
  <section class="pb-30">
    <u-container>
      <UPageGrid class="lg:grid-cols-4 gap-5">
        <UPageCard
          v-for="i in 4"
          :key="i"
          :title="
            $t(`pages.services.outsourcing.advantages.list.${i - 1}.title`)
          "
          :description="
            $t(
              `pages.services.outsourcing.advantages.list.${i - 1}.description`,
            )
          "
          class="shadow-xl"
        />
      </UPageGrid>
    </u-container>
  </section>
</template>
