<script lang="ts" setup>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const profileSummary = useTemplateRef<HTMLDivElement>("container");
const { percent } = useScrollTextHighlight(profileSummary, {
  onBeforeBuild(target) {
    const p = target.value?.querySelector("p");
    if (!p) return;

    p.innerHTML = md.render($t("home.description.text"));
  },
});
</script>

<template>
  <section class="relative">
    <div ref="container" class="flex items-center h-screen">
      <!-- <div class="h-screen relative"></div> -->
      <div class="flex items-center mx-auto">
        <u-container class="py-36">
          <div
            class="text-center px-10 flex items-center ga-5 justify-center"
            :class="{ 'opacity-35': percent <= 0 }"
          >
            <UIcon name="i-lucide-user-star" class="size-24 mb-20" />
            <!-- <UIcon name="i-lucide-star" class="size-20 mb-20" />
            <UIcon name="i-lucide-star" class="size-24 mb-20" />
            <UIcon name="i-lucide-star" class="size-20 mb-20" /> -->
          </div>
          <div class="relative">
            <p
              ref="profileSummary"
              class="text-3xl lg:text-5xl leading-[1.2]"
            ></p>

            <!-- <p ref="profileSummary" class="text-3xl lg:text-5xl leading-[1.2]">
              Travaillez avec les meilleurs profils du
              <b class="text-primary">marché international</b>
              francophone et apprenez à déléguer vos tâches afin d'optimiser la
              croissance de votre entreprise.
            </p> -->
          </div>
        </u-container>
      </div>
    </div>
  </section>
</template>
