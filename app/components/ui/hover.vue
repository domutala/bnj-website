<script setup lang="ts">
import { useElementHover } from "@vueuse/core";

const emit = defineEmits<{ (e: "hover" | "blur"): void }>();

const id = ref("uh_" + Math.random().toString().substring(2, 12));
const elementRef = ref<HTMLElement>();

const isHovered = computed(() => useElementHover(elementRef.value));
watch(
  () => isHovered.value.value,
  () => {
    if (isHovered.value.value) emit("hover");
    else emit("blur");
  },
);

onMounted(() => {
  setTimeout(() => {
    const el = document.querySelector<HTMLElement>(
      `[u-data-hover="${id.value}"]`,
    );
    if (el) elementRef.value = el;
  }, 500);
});
</script>

<template>
  <slot :props="{ 'u-data-hover': id }" :is-hovered />
</template>
