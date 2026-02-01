<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { headeColor } = defineProps<{ headeColor: "white" | "black" }>();
const section = useTemplateRef("section");
const { setColor } = useHeader();

useWindowScroll({ onScroll });
onMounted(onScroll);
function onScroll(e: Event) {
  if (!section.value) return;

  const bounding = section.value.getBoundingClientRect();
  const isHeader =
    bounding.top <= 0 &&
    (bounding.bottom >= 0 || Math.abs(bounding.bottom) < window.innerHeight);

  if (isHeader) setColor(headeColor);
}
</script>

<template>
  <section ref="section">
    <slot />
  </section>
</template>
