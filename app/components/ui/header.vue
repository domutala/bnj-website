<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useWindowScroll } from "@vueuse/core";
import { getLangItems } from "~/tools/lang";

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

const { color, setColor } = useHeader();

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

const bgWhite = computed(() => y.value !== 0 && yDir.value === "top");
const hide = computed(() => y.value !== 0 && yDir.value !== "top");

addRouteMiddleware(() => {
  setColor("white");
});
</script>

<template>
  <header
    class="ui-header transition-all fixed w-full z-20"
    :class="[
      hide ? '-top-full' : 'top-0',
      bgWhite
        ? 'bg-white/20 text-black shadow-sm backdrop-blur'
        : color === 'white'
          ? 'bg-black/0 text-white'
          : 'bg-white/0 text-black',
    ]"
  >
    <u-container class="max-w-425">
      <div class="flex items-center py-2">
        <nuxt-link :to="$localePath({ name: 'index' })" class="">
          <div class="flex items-center gap-2 font-normal text-2xl">
            <span class="font-black">BNJ</span> Team maker
          </div>
        </nuxt-link>

        <div class="mx-auto"></div>

        <div class="flex items-center gap-2">
          <UButton
            color="primary"
            aria-label="Color picker"
            class="cursor-pointer rounded-full p-3 px-5"
            icon="i-lucide-calendar-clock"
            :label="$t('meeting.cta')"
          />

          <UDropdownMenu
            :items="[getLangItems()]"
            :content="{ align: 'end', collisionPadding: 12 }"
          >
            <UButton
              v-if="!$slots.default"
              icon="i-lucide-globe"
              color="light"
              variant="ghost"
              size="xl"
              square
              class="cursor-pointer"
            />

            <slot />
          </UDropdownMenu>
        </div>
      </div>
    </u-container>
  </header>
</template>
