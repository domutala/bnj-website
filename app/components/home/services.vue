<script setup lang="ts"></script>

<template>
  <!-- w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 -->
  <div class="relative w-full bg-black text-white py-30">
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
              {{ $t("services.title") }}
            </h2>

            <p class="mt-5 text-xl">
              {{ $t("services.description") }}
            </p>
          </div>
        </div>

        <div class="w-full md:w-full lg:w-1/2 py-3">
          <UPageColumns
            class="w-full lg:grid-cols-2 lg:columns-2 space-y-3 gap-3"
          >
            <UPageCard
              v-for="index in 4"
              :key="index"
              :title="$t(`services.list.${index - 1}.title`)"
              :description="$t(`services.list.${index - 1}.description`)"
              :icon="$t(`services.list.${index - 1}.icon`)"
              :class="{ '-mt-5': index === 1 }"
              :ui="{
                leadingIcon: 'size-12',
                container: 'bg-gray-900',
                title: 'text-white',
              }"
              :to="
                $localePath({
                  name: `services-` + $t(`services.list.${index - 1}.code`),
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
  </div>
</template>

<style lang="scss">
.swiper-slide {
  height: auto;
  background-color: red;
}
</style>
