<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { useTemplateRef } from "vue";

const props = defineProps<{ threshold?: number | number[] }>();

const target = useTemplateRef("target");
const isVisible = useElementVisibility(target, { threshold: props.threshold });
</script>

<template>
  <div ref="target">
    <slot :is-visible />
  </div>
</template>
