<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const container = useTemplateRef<HTMLDivElement>("container");
useScrollTextHighlight(container, {
  onBeforeBuild(target) {
    const p1 = target.value?.querySelector("p[data-description]");
    const p2 = target.value?.querySelector("p[data-extra]");

    if (p1 && p2) {
      p1.innerHTML = md.render($t("pages.career.whyUs.description"));
      p2.innerHTML = md.render($t("pages.career.whyUs.extra"));
    }
  },
});

onMounted(() => {});
</script>

<template>
  <ui-section heade-color="white" class="relative">
    <div
      ref="container"
      class="flex items-center h-screen bg-primary-950 text-white"
    >
      <!-- <div class="h-screen relative"></div> -->
      <div class="flex mx-auto">
        <u-container class="py-36">
          <div class="lg:text-center mb-10">
            <!-- <UIcon name="i-lucide-user-round-check" class="size-24" /> -->
            <h2 class="text-6xl mt-3 font-extrabold">
              {{ $t("pages.career.whyUs.title") }}
            </h2>
          </div>

          <div class="relative" data-text-highlight>
            <p data-description class="text-4xl leading-[1.2]"></p>
            <p data-extra class="text-2xl mt-10"></p>
          </div>
        </u-container>
      </div>
    </div>
  </ui-section>
</template>
