<script lang="ts" setup>
defineProps({
  size: { type: Number, default: 10 },
  grade: { type: Number, required: true },
  color: { type: String, default: "black" },
});
</script>

<template>
  <div class="flex gap-0.5">
    <div
      v-for="i in 5"
      :key="i"
      :style="{ width: `${size}px`, height: `${size}px` }"
      class="rounded-full"
      :class="[
        `bg-${color}`,
        {
          'opacity-50': grade < i,
        },
      ]"
    ></div>
  </div>
</template>
