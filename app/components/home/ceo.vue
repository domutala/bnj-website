<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";

const features = ref<PageFeatureProps[]>([
  {
    title: "Icons",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
  },
  {
    title: "Fonts",
    description:
      "Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
  },
  {
    title: "Color Mode",
    description:
      "Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
  },
]);
const links = ref<ButtonProps[]>([
  {
    label: "Explore components",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <ui-section heade-color="black" class="w-full">
    <UPageSection
      orientation="horizontal"
      class="relative overflow-hidden w-full py-30"
    >
      <template #title>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </template>
      <template #description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nulla
        expedita tenetur tempora. Facilis, adipisci! Nemo magnam, voluptatem et
        placeat pariatur quos, debitis impedit temporibus eum fugit est sunt
        eaque?
      </template>
      <template #footer>
        <div class="">Benjamin Parienty</div>
        <div class="text-lg opacity-60">Team Marker</div>
      </template>

      <div
        class="-z-10 pointer-events-none absolute gradient-planet -right-70 bottom-1/2 shrink-0 rounded-[390.038px] size-400 blur-[90px] opacity-70 -rotate-[151.909deg]"
        style="
          background: linear-gradient(
            180deg,
            var(--ui-primary),
            rgba(187, 252, 3, 0)
          );
        "
      ></div>

      <div class="w-full">
        <div
          class="size-80 sm:size-100 overflow-hidden rounded-br-3xl rounded-t-3xl rounded-bl-[20em] shadow-2xl relative border-t border-r border-default ml-auto mr-10"
        >
          <img
            src="/images/ceo.png"
            alt="Illustration"
            class="size-full mx-auto object-top object-cover px-0"
          />

          <u-modal :ui="{ content: 'max-w-6xl' }">
            <u-button
              size="xl"
              color="neutral"
              variant="outline"
              class="absolute bottom-10 right-10 rounded-full p-3"
            >
              <template #leading>
                <u-icon
                  name="i-mdi-play"
                  class="size-10 text-red-600 cursor-pointer"
                />
              </template>
            </u-button>

            <template #content>
              <iframe
                class="h-140 w-full"
                src="https://www.youtube.com/embed/gcHYgmF13ic?si=9vKeLZ4ld5_IN823"
                title="YouTube video player"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </template>
          </u-modal>
        </div>
      </div>
    </UPageSection>
  </ui-section>
</template>
