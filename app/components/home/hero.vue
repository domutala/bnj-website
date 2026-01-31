<template>
  <section
    class="px-6 lg:px-16 relative z-0 w-full max-w-full overflow-x-clip pb-20 pt-[calc(var(--header-height)+5rem)] lg:overflow-x-clip"
  >
    <div class="pointer-events-none absolute left-0 top-0 z-10 h-full w-full">
      <div class="pointer-events-none relative h-full w-full">
        <div
          class="pointer-events-none absolute gradient-planet lg:-right[10%] -right-[41%] -top-[20%] -z-10 h-97.5 w-97.5 shrink-0 rotate-[151.909deg] rounded-[390.038px] opacity-30 blur-[30px] sm:-right-[20%] sm:h-137.5 sm:w-155 lg:-top-[40%] lg:h-165.5 lg:w-165.5 lg:blur-[90px] dark:opacity-10"
          style="
            background: linear-gradient(
              180deg,
              var(--ui-primary),
              rgba(187, 252, 3, 0)
            );
          "
        ></div>
        <div
          class="pointer-events-none absolute gradient-ellipse right-[80%] top-[46%] z-10 h-120.25 w-100.5 shrink-0 rotate-90 rounded-[481px] opacity-40 blur-[45px] lg:top-[34%] lg:h-214 lg:w-179 lg:blur-[160px] dark:opacity-15"
          style="
            background: linear-gradient(
              180deg,
              var(--ui-primary) 60%,
              rgba(187, 252, 3, 0)
            );
          "
        ></div>
      </div>
    </div>

    <div class="size-full flex">
      <u-container class="mt-40">
        <div class="max-w-200 px-5">
          <h1 class="text-3xl md:text-6xl" v-html="$t('home.hero.text')"></h1>

          <div class="mt-7 flex items-center gap-2 flex-wrap">
            <u-button
              color="light"
              variant="soft"
              size="xl"
              class="rounded-full p-3 px-5 cursor-pointer"
              href="#services"
            >
              {{ $t("home.hero.cta") }}
            </u-button>

            <UButton
              size="xl"
              color="light"
              variant="outline"
              class="cursor-pointer rounded-full p-3 px-5"
              icon="i-lucide-calendar-clock"
              :label="$t('meeting.cta')"
            />
          </div>
        </div>
      </u-container>
    </div>
  </section>
</template>
