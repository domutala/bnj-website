<script setup lang="ts"></script>

<template>
  <!-- w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 -->
  <section id="services" class="relative w-full bg-black text-white py-30">
    <div class="absolute inset-0 bg-primary/2.5"></div>
    <u-container class="relative">
      <div class="flex flex-wrap">
        <div class="w-full md:w-full lg:w-1/2">
          <div class="mr-10 mb-20">
            <u-icon
              name="i-lucide-laptop-minimal-check"
              size="92"
              class="text-primary mb-3"
            />
            <h2 class="text-2xl sm:text-4xl font-bold mx-auto">
              {{ $t("home.services.title") }}
            </h2>

            <p class="mt-5 text-xl">
              {{ $t("home.services.description") }}
            </p>
          </div>
        </div>

        <div class="w-full md:w-full lg:w-1/2 py-3">
          <UPageColumns
            class="w-full lg:grid-cols-2 lg:columns-2 space-y-3 gap-3"
          >
            <UPageCard
              v-for="index in [0, 1, 2, 3]"
              :key="index"
              :title="$t(`services.list.${index}.title`)"
              :description="$t(`services.list.${index}.description`)"
              :icon="$t(`services.list.${index}.icon`)"
              :class="{ '-mt-5': index === 0 }"
              :ui="{
                leadingIcon: 'size-12',
                container: 'bg-gray-950',
                title: 'text-white',
                description: 'text-white',
              }"
              :to="
                $localePath({
                  name: `services-` + $t(`services.list.${index}.code`),
                })
              "
              variant="ghost"
              spotlight-color="primary"
              class="rounded-none"
              spotlight
            >
            </UPageCard>
          </UPageColumns>
        </div>
      </div>
    </u-container>
  </section>
</template>

<style lang="scss">
.swiper-slide {
  height: auto;
  background-color: red;
}
</style>
