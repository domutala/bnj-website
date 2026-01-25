<script setup lang="ts"></script>

<template>
  <section class="py-25 bg-black text-white w-full">
    <div class="flex flex-col gap-4 w-full">
      <UMarquee
        pause-on-hover
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-' }"
      >
        <u-badge
          v-for="index in 10"
          :key="index"
          :label="$t(`profiles.${index - 1}`)"
          variant="soft"
          color="light"
          size="xl"
          class="rounded-full bg-gray-950 p-3 px-5"
        >
        </u-badge>
      </UMarquee>
      <UMarquee
        pause-on-hover
        reverse
        :overlay="false"
        :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-' }"
      >
        <u-badge
          v-for="index in 10"
          :key="index"
          :label="$t(`profiles.${index - 1}`)"
          variant="soft"
          color="light"
          size="xl"
          class="rounded-full bg-gray-950 p-3 px-5"
        >
        </u-badge>
      </UMarquee>
    </div>
  </section>
</template>
