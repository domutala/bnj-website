<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useWindowScroll } from "@vueuse/core";
import { getLangItems } from "~/tools/lang";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const showHorizontalNav = breakpoints.greaterOrEqual("lg");
const hideExtras = breakpoints.smallerOrEqual("sm");

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

const textColor = computed(() => {
  return bgWhite.value || color.value === "black" ? "text-black" : "text-white";
});

addRouteMiddleware(() => {
  setColor("white");
});
</script>

<template>
  <header
    class="ui-header transition-all fixed w-full z-20"
    :class="[
      textColor,
      hide ? '-top-full' : 'top-0',
      bgWhite
        ? 'bg-white/35  shadow-sm backdrop-blur'
        : color === 'white'
          ? 'bg-black/0 '
          : 'bg-white/0 ',
    ]"
  >
    <u-container class="max-w-425">
      <div class="flex items-center py-2">
        <nuxt-link :to="$localePath({ name: 'index' })" class="">
          <div class="flex items-center gap-2 font-normal text-2xl">
            <span class="font-black">BNJ</span> Team maker
          </div>
        </nuxt-link>

        <div
          v-if="showHorizontalNav"
          key="h"
          class="ml-20 mr-auto flex items-center gap-3"
        >
          <template v-for="(item, index) in items" :key="index">
            <nuxt-link v-if="!item.children" :to="item.to">
              {{ item.label }}
            </nuxt-link>

            <UDropdownMenu v-else :items="item.children">
              <div class="flex items-center gap-2 cursor-pointer">
                {{ item.label }}

                <u-icon name="i-lucide-chevron-down" />
              </div>
            </UDropdownMenu>
          </template>
        </div>

        <span v-else key="v" class="mx-auto"></span>

        <div class="flex items-center gap-2">
          <UButton
            color="primary"
            aria-label="Color picker"
            class="cursor-pointer rounded-full p-3 px-5"
            icon="i-lucide-calendar-clock"
            :label="!hideExtras ? $t('meeting.cta') : undefined"
          />

          <template v-if="!hideExtras">
            <UDropdownMenu
              :items="[getLangItems()]"
              :content="{ align: 'end', collisionPadding: 12 }"
            >
              <UButton
                v-if="!$slots.default"
                color="light"
                variant="ghost"
                size="xl"
                square
                class="cursor-pointer"
              >
                <u-icon
                  name="i-lucide-globe"
                  :class="[textColor, 'text-2xl']"
                />
              </UButton>
            </UDropdownMenu>
          </template>
        </div>
      </div>
    </u-container>
  </header>
</template>
