<script lang="ts" setup>
const { setColor } = useHeader();
setColor("black");
</script>

<template>
  <section
    aria-:label="$t('page.contact.items.Hero section"
    class="bg-background absolute top-0 z-0 h-120 w-full flex-none gap-0 overflow-hidden mask-t-from-transparent mask-t-to-black mask-t-to-37%"
  >
    <div class="absolute -inset-x-48 inset-y-0 md:-inset-x-32 xl:-inset-x-8">
      <div
        data-layer="gradient"
        class="from-blue-200 to-primfrom-primary/0 absolute top-0 right-0 left-0 h-150 flex-none bg-linear-to-b"
      ></div>
    </div>

    <!-- <div class="absolute inset-0 bg-amber-200"></div> -->
  </section>

  <section class="relative z-1 text-black pb-30">
    <u-container class="mt-40">
      <h1 class="text-6xl font-black">FAQ</h1>

      <p v-html="$t('pages.faq.description')"></p>

      <UAccordion
        :default-value="['0']"
        class="mt-10 bg-"
        :ui="{
          header: 'px-5 py-3',
          label: 'text-xl ml-5',
          item: 'mb-3 rounded-2xl bg-gray-100',
          body: 'text-xl px-10 border-t border-default py-5',
        }"
        :items="[
          ...Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map((i) => {
            return {
              label: $t(`pages.faq.items.${i}.question`),
              content: $t(`pages.faq.items.${i}.response`),
            };
          }),
        ]"
      >
        <template #trailing="{ open }">
          <u-icon
            name="i-lucide-plus"
            class="size-7 transition ml-auto"
            :class="{ 'rotate-45 cursor-pointer text-primary': open }"
          />
        </template>
      </UAccordion>
    </u-container>
  </section>
</template>
