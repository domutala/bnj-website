<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
</script>

<template>
  <ui-section heade-color="white" class="relative bg-primary-950 text-white">
    <!-- <div class="h-screen relative"></div> -->
    <u-container class="pb-15 text- px-6">
      <div class="mb-10">
        <!-- <UIcon name="i-lucide-user-round-check" class="size-24" /> -->
        <h2 class="text-4xl font-extrabold">
          {{ $t("pages.career.whyUs.title") }}
        </h2>
      </div>

      <div class="relative sm:text-2xl xl:text-3xl" data-text-highlight>
        <p
          data-description
          v-html="md.render($t('pages.career.whyUs.description'))"
        ></p>
        <p
          data-extra
          class="mt-10"
          v-html="md.render($t('pages.career.whyUs.extra'))"
        ></p>
      </div>
    </u-container>
  </ui-section>
</template>
