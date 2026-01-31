<script lang="ts" setup>
const { setColor } = useHeader();
setColor("black");
</script>

<template>
  <div class="flex flex-col relative isolate">
    <section
      aria-label="Hero section"
      class="bg-background absolute top-0 z-0 h-150 w-full flex-none gap-0 overflow-hidden mask-t-from-transparent mask-t-to-black mask-t-to-[37%]"
    >
      <div class="absolute -inset-x-48 inset-y-0 md:-inset-x-32 xl:-inset-x-8">
        <!-- <div
          style="
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: auto;
          "
        >
          <div style="width: 100%; height: 100%">
            <canvas
              style="display: block; width: 1078px; height: 600px"
              data-engine="three.js r182"
              width="1078"
              height="600"
            ></canvas>
          </div>
        </div> -->

        <!-- <div
          data-layer="gradient"
          class="from-background to-background/0 absolute top-0 right-0 left-0 h-[415px] flex-none bg-gradient-to-b"
        ></div> -->

        <div
          data-layer="columns"
          class="absolute inset-0 flex flex-row flex-nowrap content-center items-center justify-start gap-0 opacity-10 h-[1024px] flex-none overflow-visible p-0"
        >
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r bg-gradient-to-l backdrop-blur-[25px]"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r bg-gradient-to-l backdrop-blur-[25px]"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r bg-gradient-to-l backdrop-blur-[25px]"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r bg-gradient-to-l backdrop-blur-[25px]"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r bg-gradient-to-l backdrop-blur-[25px]"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r bg-gradient-to-l backdrop-blur-[25px]"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r backdrop-blur-[25px] bg-gradient-to-r"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r backdrop-blur-[25px] bg-gradient-to-r"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r backdrop-blur-[25px] bg-gradient-to-r"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r backdrop-blur-[25px] bg-gradient-to-r"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r backdrop-blur-[25px] bg-gradient-to-r"
            aria-hidden="true"
          ></div>
          <div
            class="border-border/10 from-background/80 to-background/0 relative h-full w-[1px] flex-1 border-r backdrop-blur-[25px] bg-gradient-to-r"
            aria-hidden="true"
          ></div>
        </div>

        <div
          data-layer="background"
          class="from-primary/30 to-background absolute inset-0 flex-none bg-linear-to-b"
          aria-hidden="true"
        ></div>
      </div>
    </section>

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
                var(--ui-color-primary-300),
                rgba(187, 252, 3, 0)
              );
            "
          ></div>
          <div
            class="pointer-events-none absolute gradient-ellipse right-[80%] top-[46%] z-10 h-120.25 w-100.5 shrink-0 rotate-90 rounded-[481px] opacity-40 blur-[45px] lg:top-[34%] lg:h-214 lg:w-179 lg:blur-[160px] dark:opacity-15"
            style="
              background: linear-gradient(
                180deg,
                var(--ui-color-primary-300) 60%,
                rgba(187, 252, 3, 0)
              );
            "
          ></div>
        </div>
      </div>

      <div class="w-full flex relative z-10">
        <u-container class="mt-60">
          <div class="max-w-200 px-5 mb-30">
            <div class="text-xl mb-2 text-primary">
              {{ $t("pages.services.outsourcing.hero.label") }}
            </div>
            <h1 class="text-4xl md:text-6xl font-bold">
              {{ $t("pages.services.outsourcing.hero.title") }}
            </h1>

            <!-- <u-button
              color="neutral"
              variant="ghost"
              size="xl"
              class="cursor-pointer p-3 rounded-full mt-20"
              href="#info"
            >
              <u-icon name="i-lucide-circle-arrow-down" class="size-12" />
            </u-button> -->
          </div>
        </u-container>
      </div>
    </section>

    <section class="pb-30">
      <u-container>
        <UPageGrid class="lg:grid-cols-4 gap-5">
          <UPageCard
            v-for="i in 4"
            :key="i"
            :title="
              $t(`pages.services.outsourcing.advantages.list.${i - 1}.title`)
            "
            :description="
              $t(
                `pages.services.outsourcing.advantages.list.${i - 1}.description`,
              )
            "
            class="shadow-xl border-primary-100 border"
          />
        </UPageGrid>
      </u-container>
    </section>

    <div class="text-center pb-15">
      <UButton
        color="primary"
        aria-label="Color picker"
        class="cursor-pointer rounded-full p-3 px-5"
        icon="i-lucide-calendar-clock"
        :label="$t('meeting.cta')"
      />
    </div>

    <div class="relative w-full">
      <div
        class="absolute left-0 top-0 z-20 h-px w-full bg-linear-to-r from-transparent via-primary/50"
      ></div>
    </div>

    <div class="w-full bg-gray-50">
      <section class="w-full pb-30 pt-15 text-center">
        <u-container>
          <u-icon name="i-lucide-lightbulb" class="size-20 text-primary" />

          <h2 class="text-4xl max-w-180 mt-5 mx-auto">
            Optimisez votre stratégie de développement grâce à nos experts
          </h2>

          <p class="mt-5 text-xl">
            BNJ Talent Makers est une académie spécialisée dans l’optimisation
            et l’externalisation de talents qualifiés pour des missions
            temporaires ou durables. En proposant des profils compétents et
            engagés, elle permet aux entreprises de gagner en agilité, de
            réduire leurs coûts et de se concentrer sur leur développement.

            <br />
            <br />
            Nous prenons en charge tout le processus, de la sélection à
            l’intégration, offrant ainsi une solution flexible et sans les
            contraintes d’une embauche classique.
          </p>
        </u-container>
      </section>

      <section id="info" class="py-15">
        <u-container
          class="bg-gray-100 rounded-2xl rounded-tl-[5em] border border-primary/30"
        >
          <div class="p-10 py-16">
            <div class="flex md:flex-row flex-col gap-5">
              <div>
                <div
                  class="size-25 md:size-50 overflow-hidden rounded-full relative border-t border border-default mr-10"
                >
                  <u-avatar
                    :src="$t('testimonials.2.avatar')"
                    :alt="$t('testimonials.2.name')"
                    class="size-full mx-auto object-top object-cover px-0"
                  />
                </div>
              </div>

              <div>
                <p
                  class="text-lg md:text-3xl font-bold before:content-[open-quote] after:content-[close-quote]"
                >
                  {{ $t("testimonials.2.quote") }}
                </p>

                <div class="mt-5">
                  <div class="">
                    {{ $t("testimonials.2.name") }}
                  </div>
                  <div class="text-lg opacity-60">
                    {{ $t("testimonials.2.function") }}
                  </div>
                </div>
              </div>
            </div>

            <!--         
              <u-avatar
                size="3xl"
                src=""
              ></u-avatar> -->
          </div>
        </u-container>
      </section>
    </div>
  </div>
</template>
