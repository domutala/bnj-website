<script setup lang="ts">
const i18n = useI18n();

const testimonials = ref([
  ...Array.from([0, 1, 2]).map((index) => {
    return {
      user: {
        name: i18n.t(`testimonials.${index}.name`),
        description: i18n.t(`testimonials.${index}.function`),
        avatar: {
          src: i18n.t(`testimonials.${index}.avatar`),
          alt: i18n.t(`testimonials.${index}.name`),
        },
      },
      quote: i18n.t(`testimonials.${index}.quote`),
    };
  }),
]);
</script>

<template>
  <ui-section heade-color="black" class="py-20 bg-gray-50 w-full">
    <u-container>
      <UPageColumns class="gap-4 space-y-4">
        <UPageCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          variant="soft"
          class="rounded-2xl border border-primary-200"
          :description="testimonial.quote"
          :ui="{
            description:
              'text-xl before:content-[open-quote] after:content-[close-quote]',
          }"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="3xl"
              :ui="{ avatar: 'size-14' }"
            />
          </template>
        </UPageCard>
      </UPageColumns>
    </u-container>
  </ui-section>
</template>
