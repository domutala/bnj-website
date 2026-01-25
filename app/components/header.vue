<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useWindowScroll } from "@vueuse/core";

const yDir = ref<"bottom" | "top">();
const { y, directions } = useWindowScroll({
  onScroll(e) {
    yDir.value = directions.bottom
      ? "bottom"
      : directions.top
        ? "top"
        : yDir.value;
  },
});

const i18n = useI18n();
const items = ref<NavigationMenuItem[]>([
  {
    label: "Guide",
    to: "/docs/getting-started",
    children: [
      {
        label: "Introduction",
        description: "Fully styled and customizable components for Nuxt.",
        icon: "i-lucide-house",
      },
      {
        label: "Installation",
        description:
          "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
      },
      {
        label: "Icons",
        icon: "i-lucide-smile",
        description:
          "You have nothing to do, @nuxt/icon will handle it automatically.",
      },
      {
        label: "Colors",
        icon: "i-lucide-swatch-book",
        description:
          "Choose a primary and a neutral color from your Tailwind CSS theme.",
      },
      {
        label: "Theme",
        icon: "i-lucide-cog",
        description:
          "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
      },
    ],
  },
  {
    label: i18n.t("services.label"),
    to: "/services",
    exact: true,
    children: [
      ...Array.from([0, 1, 2, 3]).map((i) => {
        return {
          label: $t(`services.list.${i}.title`),
          icon: $t(`services.list.${i}.icon`),
          // description: $t(`services.list.${i}.description`),
          to: "/services/compos",
        };
      }),
    ],
  },

  {
    label: "Contact",
    to: Use.localePath({ name: "contact" }),
  },

  {
    label: "Carrières",
    to: "https://github.com/nuxt/ui",
  },

  {
    label: "Ressurces",
    to: "/docs/components",
    exact: true,
    children: [
      {
        label: "Link",
        icon: "i-lucide-file-text",
        description: "Use NuxtLink with superpowers.",
        to: "/docs/components/link",
      },
      {
        label: "Modal",
        icon: "i-lucide-file-text",
        description: "Display a modal within your application.",
        to: "/docs/components/modal",
      },
      {
        label: "NavigationMenu",
        icon: "i-lucide-file-text",
        description: "Display a list of links.",
        to: "/docs/components/navigation-menu",
      },
      {
        label: "Pagination",
        icon: "i-lucide-file-text",
        description: "Display a list of pages.",
        to: "/docs/components/pagination",
      },
      {
        label: "Popover",
        icon: "i-lucide-file-text",
        description:
          "Display a non-modal dialog that floats around a trigger element.",
        to: "/docs/components/popover",
      },
      {
        label: "Progress",
        icon: "i-lucide-file-text",
        description: "Show a horizontal bar to indicate task progression.",
        to: "/docs/components/progress",
      },
    ],
  },
]);

// const { navigationByCategory } = useNavigation(navigation!)

const textColor = computed(() => {
  return "text-white";
});
</script>

<template>
  <UHeader
    class="bg-transparent backdrop-blur-none border-b-0 fixed w-full z-60 transition-all"
    :ui="{ container: 'max-w-[1700px]', center: 'bg--500 w-full' }"
    :class="{ 'bg-white/95 shadow-sm': y !== 0 && yDir === 'top' }"
    :style="{
      top: y === 0 || yDir === 'top' ? '0' : '-100%',
    }"
    :toggle="false"
  >
    <template #title>
      <div
        class="flex items-center gap-2 font-normal text-2xl text-inverted mix-blend-difference"
      >
        <span class="font-black">BNJ</span> Teammaker
      </div>
    </template>

    <template #default>
      <UNavigationMenu :items="items" color="light" class="pl-20" />
    </template>

    <template #right>
      <UButton
        color="primary"
        aria-label="Color picker"
        class="cursor-pointer rounded-full p-3 px-5"
        icon="i-lucide-calendar-clock"
        :label="$t('meeting.cta')"
      />

      <!-- <ui-preferencies>
        <UButton
          icon="i-lucide-swatch-book"
          color="light"
          variant="ghost"
          square
          aria-label="Color picker"
          class="cursor-pointer"
        />
      </ui-preferencies> -->
    </template>
  </UHeader>
</template>
