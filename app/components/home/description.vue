<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
</script>

<template>
  <section class="relative bg-white text-black w-full py-20">
    <u-container class="">
      <p
        class="text-xl sm:text-3xl lg:text-5xl leading-[1.2] text-center"
        v-html="md.render($t('home.description.text'))"
      ></p>
    </u-container>
  </section>
</template>
