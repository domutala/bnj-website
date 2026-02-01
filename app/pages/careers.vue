<script lang="ts" setup>
import UiHomeProfile from "~/components/home/profile.vue";
import UiCareersWhy from "~/components/careers/why.vue";

const { setColor } = useHeader();
setColor("white");
</script>
<template>
  <section class="relative min-h-180 bg-primary-950 text-white">
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none"
      style="height: 841px"
    >
      <div class="absolute right-0 top-0 h-full w-full opacity-60 globe">
        <img
          src="/images/globe.76001c3.webp"
          alt="globe"
          class="object-contain object-top ml-auto h-full"
        />
      </div>

      <!-- <div
        class="absolute -right-37.25 top-29.5 w-81 h-84 rounded-[614px] blur-[138px] bg-primary"
      ></div> -->

      <div
        class="absolute -right-50 top-0 w-150 h-230 rounded-[614px] blur-[138px] bg-primary-950"
      ></div>

      <!-- <div
        class="absolute right-0 translate-x-1/2 top-0 size-120 rounded-full bg-linear-to-l blur-[25px] from-primary/80 to-primary/0"
      ></div> -->
    </div>

    <u-container class="relative pt-30 md:pt-80">
      <div class="max-w-220">
        <h1 class="text-5xl font-bold">
          {{ $t("pages.career.hero.title") }}
        </h1>
        <p class="mt-5 opacity-70">
          {{ $t("pages.career.hero.subtitle") }}
          nobis.
        </p>

        <div class="flex items-center mt-10 gap-3">
          <u-button
            color="light"
            variant="solid"
            size="xl"
            class="rounded-full p-3 px-5 cursor-pointer"
            :to="$localePath({ name: 'apply' })"
          >
            <span class="text-black">
              {{ $t("pages.career.hero.cta") }}
            </span>
          </u-button>

          <u-button
            color="light"
            variant="solid"
            size="xl"
            class="rounded-full p-3 px-5 cursor-pointer"
            to="https://www.linkedin.com/company/bnjteammaker/jobs/"
            target="_blank"
          >
            <span class="text-black flex items-center gap-2">
              <u-icon name="i-simple-icons-linkedin" size="20" />
              {{ $t("pages.career.hero.cta2") }}
            </span>
          </u-button>
        </div>
      </div>
    </u-container>

    <u-container class="mt-60 pb-50">
      <UPageGrid class="lg:grid-cols-4 gap-5">
        <UPageCard
          v-for="(item, i) in [
            'flexibility',
            'projects',
            'support',
            'recognition',
          ]"
          :key="i"
          :title="$t(`pages.career.benefits.items.${item}.title`)"
          :description="$t(`pages.career.benefits.items.${item}.description`)"
          class="shadow-xl bg-transparent ring-0"
          :ui="{
            container: 'bg-primary-900',
            title: 'text-white text-xl mb-3',
            description: 'text-white',
          }"
        />
      </UPageGrid>
    </u-container>
  </section>

  <div class="relative w-full">
    <div
      class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-primary"
    ></div>
  </div>

  <UiCareersWhy />

  <div class="relative w-full">
    <div
      class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-primary"
    ></div>
  </div>

  <ui-section
    heade-color="white"
    class="w-full bg-primary-950 text-white py-30"
  >
    <u-container>
      <UIcon name="i-lucide-users-round" class="size-18 mb-5" />
      <h2 class="text-3xl font-black">
        {{ $t("pages.career.profiles.title") }}
      </h2>
      <p class="text-2xl">
        {{ $t("pages.career.profiles.description") }}
        {{ $t("pages.career.profiles.note") }}
      </p>
    </u-container>
    <UiHomeProfile class="py-0! mt-15" />
  </ui-section>

  <ui-section heade-color="white" class="pb-30 bg-primary-950 text-white">
    <u-container>
      <h2 class="text-2xl md:text-4xl font-bold mb-5">
        {{ $t("pages.career.values.title") }}
      </h2>
      <UPageGrid class="lg:grid-cols-4 gap-5">
        <UPageCard
          v-for="i in 4"
          :key="i"
          :title="$t(`pages.career.values.items.${i - 1}.title`)"
          :description="$t(`pages.career.values.items.${i - 1}.description`)"
          class="shadow-xl bg-transparent ring-0 border border-primary-800"
          :ui="{
            container: 'bg-',
            title: 'text-white text-xl mb-3',
            description: 'text-white',
          }"
        />
      </UPageGrid>
    </u-container>
  </ui-section>

  <ui-section heade-color="black" class="py-30">
    <u-container class="max-w-220">
      <h2 class="text-3xl">
        {{ $t("pages.career.recruitmentProcess.title") }}
      </h2>

      <UAccordion
        type="multiple"
        :default-value="['0']"
        class="mt-5"
        :ui="{
          header: 'px-5 py-3',
          label: 'text-xl ml-5',
          item: 'mb-3 border! border-primary-300 rounded-2xl shadow-lg',
          body: 'text-xl px-10 border-t border-default py-5',
        }"
        :items="[
          ...Array.from([0, 1, 2, 3]).map((i) => {
            return {
              label: $t(`pages.career.recruitmentProcess.steps.${i}.title`),
              content: $t(
                `pages.career.recruitmentProcess.steps.${i}.description`,
              ),
            };
          }),
        ]"
      >
        <template #leading="{ index, open }">
          <div
            class="rounded-full size-7 flex items-center justify-center border border-primary-300"
            :class="{ 'bg-primary text-white': open }"
          >
            {{ index + 1 }}
          </div>
        </template>
      </UAccordion>
    </u-container>
  </ui-section>

  <ui-section heade-color="black" class="w-full bg-white text-black pb-30">
    <div class="text-center">
      <h2 class="text-2xl md:text-4xl font-bold">
        {{ $t("pages.career.apply.description") }}
      </h2>
      <p class="text-2xl">
        {{ $t("pages.career.apply.cta") }}
        {{ $t("pages.career.apply.footer") }}
      </p>

      <div class="flex items-center justify-center mt-10 gap-3">
        <u-button
          color="neutral"
          variant="solid"
          size="xl"
          class="rounded-full p-3 px-5 cursor-pointer"
          :to="$localePath({ name: 'apply' })"
        >
          <span class="">
            {{ $t("pages.career.apply.title") }}
          </span>
        </u-button>

        <u-button
          color="neutral"
          variant="solid"
          size="xl"
          class="rounded-full p-3 px-5 cursor-pointer"
          to="https://www.linkedin.com/company/bnjteammaker/jobs/"
          target="_blank"
        >
          <span class="flex items-center gap-2">
            <u-icon name="i-simple-icons-linkedin" size="20" />
            Nos offres d'emploi
          </span>
        </u-button>
      </div>
    </div>
  </ui-section>
</template>
