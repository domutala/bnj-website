<template>
  <section class="mt-10">
    <u-container>
      <div class="relative w-full z-10">
        <div
          class="extend absolute right-0 top-full w-px origin-top bg-linear-to-b from-white h-1/6"
        ></div>
        <div
          class="extend absolute bottom-full right-0 w-px origin-bottom bg-linear-to-t from-white h-full"
        ></div>
        <div
          class="extend absolute bottom-full left-0 w-px origin-bottom bg-linear-to-t from-white h-full"
        ></div>
        <div
          class="extend absolute left-0 top-full w-px origin-top bg-linear-to-b from-white h-1/6"
        ></div>

        <!-- dots -->
        <div
          class="dot absolute -right-0.5 -top-0.5 z-20 max-h-1.25 min-h-1.25 min-w-1.25 max-w-1.25 rounded-full bg-background-dark bg-white"
        ></div>
        <div
          class="dot absolute -bottom-0.5 -right-0.5 z-20 max-h-1.25 min-h-1.25 min-w-1.25 max-w-1.25 rounded-full bg-background-dark bg-white"
        ></div>
        <div
          class="dot absolute -bottom-0.5 -left-0.5 z-20 max-h-1.25 min-h-1.25 min-w-1.25 max-w-1.25 rounded-full bg-background-dark bg-white"
        ></div>
        <div
          class="dot absolute -left-0.5 -top-0.5 z-20 max-h-1.25 min-h-1.25 min-w-1.25 max-w-1.25 rounded-full bg-background-dark bg-white"
        ></div>
        <!-- dots -->

        <div
          class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-white"
        ></div>
        <div
          class="absolute right-0 top-0 z-20 h-full w-px bg-linear-to-t from-transparent via-white"
        ></div>
        <div
          class="absolute bottom-0 left-0 z-20 h-px w-full bg-linear-to-r from-transparent via-white"
        ></div>
        <div
          class="absolute left-0 top-0 z-20 h-full w-px bg-linear-to-t from-transparent via-white"
        ></div>

        <div class="relative py-10 w-full">
          <div
            class="flex flex-col items-center gap-10 lg:flex-row lg:gap-12 lg:pl-28"
          >
            <h2
              class="body-s-medium w-full max-w-55.5 text-center font-medium! lg:min-w-55 lg:max-w-55.25 lg:text-left text-2xl"
            >
              {{ $t("home.marquee.title") }}
            </h2>

            <div class="relative w-full overflow-hidden">
              <div
                class="pointer-events-none absolute -left-px -top-6 z-10 h-24 w-4 bg-linear-to-r px-4 py-2 md:w-8 lg:w-24 from-black via-black"
              ></div>

              <UMarquee :overlay="false">
                <img
                  :src="'/images/partners/bja.png'"
                  loading="lazy"
                  alt="logo bja"
                  class="h-10 invert brightness-0"
                />

                <img
                  :src="'/images/partners/cse.png'"
                  loading="lazy"
                  alt="logo cse"
                  class="h-10 invert brightness-0"
                />

                <img
                  :src="'/images/partners/earth.svg'"
                  loading="lazy"
                  alt="logo earth"
                  class="h-10 invert brightness-0"
                />

                <img
                  :src="'/images/partners/enerlex.png'"
                  loading="lazy"
                  alt="logo enerlex"
                  class="h-10 invert brightness-0"
                />

                <img
                  :src="'/images/partners/mayerbrown.png'"
                  loading="lazy"
                  alt="logo mayer brown"
                  class="h-10 invert brightness-0"
                />

                <img
                  :src="'/images/partners/swim.svg'"
                  loading="lazy"
                  alt="logo swim"
                  class="h-10 invert brightness-0"
                />
              </UMarquee>

              <div
                class="pointer-events-none absolute -right-px -top-6 z-10 h-24 w-4 bg-linear-to-l px-4 py-2 md:w-8 lg:w-24 from-black via-black"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </u-container>
  </section>
</template>
