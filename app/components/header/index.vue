<script lang="ts" setup>
import {
  breakpointsTailwind,
  useBreakpoints,
  useWindowScroll,
} from "@vueuse/core";
import type { NavigationMenuItem } from "@nuxt/ui";

const breakpoints = useBreakpoints(breakpointsTailwind);
const showHorizontalNav = breakpoints.greaterOrEqual("lg");
const hideExtras = breakpoints.smallerOrEqual("sm");

const { color } = useHeader();
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
    code: "services",
    label: i18n.t("services.label"),
    to: "/services",
    exact: true,
    children: [
      ...Array.from([0, 1, 2, 3]).map((i) => {
        return {
          label: $t(`services.list.${i}.title`),
          icon: $t(`services.list.${i}.icon`),
          to: Use.localePath({
            name: "services-" + $t(`services.list.${i}.code`),
          }),
          // description: $t(`services.list.${i}.description`),
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
    to: Use.localePath({ name: "careers" }),
  },

  {
    code: "ressurces",
    label: "Ressurces",
    to: "/docs/components",
    exact: true,
    children: [
      {
        label: "FAQ",
        to: Use.localePath({ name: "faq" }),
      },

      {
        label: "Blog",
      },

      {
        label: "Politique de confidentialité",
      },
    ],
  },
]);

const open = ref<{ [key: string]: boolean }>({});
const hide = computed(() => y.value !== 0 && yDir.value !== "top");
const _color = computed(() => {
  const opacity = y.value === 0 ? 0 : 10;

  return color.value === "white"
    ? `bg-black/${opacity} text-white`
    : `bg-white/${opacity} text-black`;
});
</script>

<template>
  <header
    class="fixed z-100 w-full h-(--ui-header-height) flex items-center transition-all"
    :class="[
      _color,
      hide ? '-top-full' : 'top-0',
      { 'backdrop-blur-3xl': y !== 0 },
    ]"
  >
    <u-container class="max-w-425">
      <div class="flex items-center">
        <nuxt-link :to="$localePath({ name: 'index' })" class="">
          <div class="flex items-center gap-2 font-normal text-2xl select-none">
            <span class="font-black">BNJ</span> Team Maker
          </div>
        </nuxt-link>

        <div
          v-if="showHorizontalNav"
          class="flex items-center gap-3 ml-20 mr-auto"
        >
          <template v-for="(item, index) in items" :key="index">
            <nuxt-link v-if="!item.children" :to="item.to">
              {{ item.label }}
            </nuxt-link>

            <UPopover
              v-else
              :ui="{
                content: [
                  'backdrop-blur-3xl ring-primary/15 group',
                  color === 'black'
                    ? 'bg-black/7 text-black'
                    : 'bg-white/7 text-white',
                ],
              }"
              :content="{ sideOffset: 25 }"
              mode="hover"
              v-model="open[item.code]"
            >
              <template #default="{ open: isOpen }">
                <div class="flex items-center gap-2 w-max cursor-pointer">
                  {{ item.label }} {{ open[item.code] }}

                  <u-icon
                    name="i-lucide-chevron-down"
                    class="transition"
                    :class="{ 'rotate-180': isOpen }"
                  />
                </div>
              </template>

              <template #content>
                <div class="max-w-150 p-7">
                  <nuxt-link
                    v-for="(link, l) in item.children"
                    :key="l"
                    :to="link.to"
                    class="text-3xl transition hover:opacity-100 group-hover:opacity-45 flex items-center gap-2 mb-2"
                    @click="open[item.code] = false"
                  >
                    <u-icon v-if="link.icon" :name="link.icon" class="size-5" />
                    <span>{{ link.label }}</span>
                  </nuxt-link>
                </div>
              </template>
            </UPopover>
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
            <!-- <UDropdownMenu
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
            </UDropdownMenu> -->
          </template>
        </div>
      </div>
    </u-container>
  </header>
</template>
