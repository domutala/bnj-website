<script setup lang="ts">
const current = ref(1);
const colors = [
  "color-success-900",
  "error",
  "color-primary-700",
  "color-warning-700",
];
</script>

<template>
  <section class="py- relative">
    <u-container ref="containerIntro" class="mb-10">
      <div class="text-center">
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
    </u-container>

    <u-container class="mb-25">
      <div class="flex gap-2">
        <ui-hover v-for="i in 4" @hover="current = i - 1">
          <template #default="{ props }">
            <div
              v-bind="props"
              class="transition-all cursor-pointer h-140"
              :class="{
                'w-1/8': i - 1 !== current,
                'w-5/8': i - 1 === current,
              }"
            >
              <UPageCard
                orientation="vertical"
                spotlight-color="primary"
                class="rounded-2xl backdrop-blur-sm shadow-md hover:shadow-2xl transition-all group h-full"
                :ui="{ container: 'p-0 sm:p-0', body: 'w-full' }"
                spotlight
              >
                <template #body>
                  <div
                    v-if="i - 1 !== current"
                    class="p-2 flex items-center justify-center h-full"
                  >
                    <div class="text-center text-sm">
                      <u-icon
                        :name="$t(`services.list.${i - 1}.icon`)"
                        size="36"
                      />

                      <h2>
                        {{ $t(`services.list.${i - 1}.title`) }}
                      </h2>
                    </div>
                  </div>

                  <div
                    v-else
                    class="relative p-10 flex flex-col h-full overflow-hidden rounded-2xl"
                  >
                    <u-icon
                      :name="$t(`services.list.${i - 1}.icon`)"
                      :style="{ color: `var(--ui-${colors[i - 1]})` }"
                      class="absolute -bottom-2/5 -left-1/3 size-200 opacity-15"
                    />

                    <div class="absolute inset-0 pointer-events-none">
                      <div
                        class="absolute inset-0 opacity-7"
                        :style="{
                          backgroundColor: `var(--ui-${colors[i - 1]})`,
                        }"
                      ></div>
                      <div
                        class="pointer-events-none absolute gradient-ellipse -right-1/2 top-0 size-180 shrink-0 rotate-90 rounded-[481px] opacity-40 blur-[60px]"
                        :style="{
                          background: `linear-gradient(
                            40deg,
                            var(--ui-${colors[i - 1]}) 60%,
                            rgba(187, 252, 3, 0)
                          )`,
                        }"
                      ></div>
                    </div>

                    <h2
                      class="text-4xl mt-auto relative font-bold mb-3"
                      :style="{ color: `var(--ui-${colors[i - 1]})` }"
                    >
                      {{ $t(`services.list.${i - 1}.title`) }}
                    </h2>
                    <p class="text-2xl relative mb-15">
                      {{ $t(`services.list.${i - 1}.description`) }}
                    </p>
                  </div>
                </template>
              </UPageCard>
            </div>
          </template>
        </ui-hover>
      </div>
    </u-container>
  </section>
</template>
