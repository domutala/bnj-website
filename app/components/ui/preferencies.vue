<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { getThemeItems } from "~/tools/theme";
import { getLangItems } from "~/tools/lang";

const { y } = useWindowScroll();
const localePath = useLocalePath();
const { locale } = useI18n();
</script>

<template>
  <UDropdownMenu
    :items="[...getThemeItems(), getLangItems()]"
    :content="{ align: 'end', collisionPadding: 12 }"
  >
    <UButton
      v-if="!$slots.default"
      icon="i-lucide-swatch-book"
      color="primary"
      variant="ghost"
      size="xl"
      square
      aria-label="Color picker"
      class="cursor-pointer"
    />

    <slot />
  </UDropdownMenu>
</template>
