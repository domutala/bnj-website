<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";
import MarkdownIt from "markdown-it";

const { setColor } = useHeader();
setColor("black");

const md = new MarkdownIt();
const i18n = useI18n();

const companySize = ["-20", "21-250", "251-2000", "+2000"];
const availability = ["immediately", "1month", "2mois", "3mois", "other"];
const educationLevel = [
  "none",
  "bepCap",
  "baccalaureate",
  "bacPlus2",
  "bacPlus3",
  "bacPlus4",
  "bacPlus5",
  "doctorate",
];

const success = ref(false);

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const schema = z.object({
  firstName: z
    .string(i18n.t("pages.apply.errors.firstName.required"))
    .min(2, i18n.t("pages.apply.errors.firstName.min")),
  lastName: z
    .string(i18n.t("pages.apply.errors.lastName.required"))
    .min(2, i18n.t("pages.apply.errors.lastName.required")),
  email: z.email(i18n.t("pages.apply.errors.email.invalid")),
  phone: z.string(i18n.t("pages.apply.errors.email.invalid")),

  cv: z
    .any()
    .refine(
      (file) => file !== undefined,
      i18n.t("pages.apply.errors.cv.required"),
    )
    .refine(
      (file) => file?.type === "application/pdf",
      i18n.t("pages.apply.errors.cv.type"),
    )
    .refine(
      (file) => file?.size <= MAX_FILE_SIZE,
      i18n.t("pages.apply.errors.cv.size"),
    ),

  desiredGrossSalary: z
    .number(i18n.t("pages.apply.errors.20000.required"))
    .min(20000)
    .max(120000),

  availability: z.enum(
    availability,
    i18n.t("pages.apply.errors.availability.required"),
  ),

  educationLevel: z.enum(
    educationLevel,
    i18n.t("pages.apply.errors.educationLevel.required"),
  ),

  acceptCondition: z.boolean(
    i18n.t("pages.apply.errors.acceptCondition.required"),
  ),

  motivation: z
    .string(i18n.t("pages.apply.errors.motivation.required"))
    .optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  educationLevel: undefined,
  motivation: undefined,

  desiredGrossSalary: 28000,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  success.value = true;
}
</script>

<template>
  <section
    aria-:label="$t('page.contact.items.Hero section"
    class="bg-background absolute top-0 z-0 h-200 w-full flex-none gap-0 overflow-hidden mask-t-from-transparent mask-t-to-black mask-t-to-37%"
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
        class="from-gray-300 to-primfrom-primary/0 absolute top-0 right-0 left-0 h-50 flex-none bg-linear-to-b"
      ></div> -->

      <div
        data-layer="columns"
        class="absolute inset-0 flex flex-row flex-nowrap content-center items-center justify-start gap-0 opacity-10 h-256 flex-none overflow-visible p-0"
      >
        <div
          v-for="i in 10"
          :key="i"
          class="border-border/10 from-primary/80 to-primary/0 relative h-full w-px flex-1 border-r bg-linear-to-l backdrop-blur-[25px]"
          aria-hidden="true"
        ></div>

        <div
          v-for="i in 10"
          class="border-border/10 from-primary/80 to-primary/0 relative h-full w-px flex-1 border-r backdrop-blur-[25px] bg-linear-to-r"
          aria-hidden="true"
        ></div>
      </div>

      <!-- <div
        data-layer="background"
        class="from-primary/30 to-background absolute inset-0 flex-none bg-linear-to-b"
        aria-hidden="true"
      ></div> -->
    </div>

    <!-- <div class="absolute inset-0 bg-amber-200"></div> -->
  </section>

  <div class="w-full relative z-10 pt-40 pb-30 text-black">
    <u-container class="">
      <div class="mb-15">
        <h1 class="text-6xl font-bold text-center text-">
          {{ $t("pages.apply.title") }}
        </h1>
      </div>

      <div class="bg-white p-10 relative">
        <p v-if="success" v-html="md.render($t('pages.apply.success'))"></p>

        <UForm
          v-else
          :schema="schema"
          :state="state"
          class="space-y-4 p-5"
          @submit="onSubmit"
        >
          <UFormField
            :label="$t('pages.apply.items.firstName')"
            name="firstName"
            required
          >
            <UInput
              v-model="state.firstName"
              class="w-full"
              size="xl"
              required
            />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.lastName')"
            name="lastName"
            required
          >
            <UInput v-model="state.lastName" class="w-full" size="xl" />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.email')"
            name="email"
            required
          >
            <UInput v-model="state.email" class="w-full" size="xl" />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.phone')"
            name="phone"
            required
          >
            <UInput v-model="state.phone" class="w-full" size="xl" type="tel" />
          </UFormField>

          <UFormField name="cv" required>
            <UFileUpload
              :label="$t('pages.apply.items.cv')"
              color="neutral"
              description="Fichier PDF (max. 10MB)"
              class="w-full min-h-48 cursor-pointer"
              accept="application/pdf"
              layout="list"
              v-model="state.cv"
            />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.availability')"
            name="availability"
            required
          >
            <URadioGroup
              v-model="state.availability"
              :items="
                availability.map((c) => ({
                  label: $t(`pages.apply.availability.${c}`),
                  value: c,
                }))
              "
            />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.educationLevel')"
            name="educationLevel"
            required
          >
            <USelect
              v-model="state.educationLevel"
              :items="
                educationLevel.map((c) => ({
                  label: $t(`pages.apply.educationLevel.${c}`),
                  value: c,
                }))
              "
              class="w-full"
              size="xl"
            />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.desiredGrossSalary')"
            :hint="`${state.desiredGrossSalary} Euro`"
            name="desiredGrossSalary"
            required
          >
            <USlider
              :step="500"
              :min="20000"
              :max="120000"
              size="xl"
              tooltip
              v-model="state.desiredGrossSalary"
            />
          </UFormField>

          <UFormField
            :label="$t('pages.apply.items.motivation')"
            name="motivation"
          >
            <UTextarea v-model="state.motivation" class="w-full" size="xl" />
          </UFormField>

          <UFormField name="acceptCondition">
            <UCheckbox
              v-model="state.acceptCondition"
              :label="$t('pages.apply.items.acceptCondition')"
            />
          </UFormField>

          <div class="flex items-center justify-center mt-10">
            <UButton
              type="submit"
              class="cursor-pointer p-3 px-5 mx-auto"
              size="xl"
            >
              {{ $t("pages.apply.submit") }}
            </UButton>
          </div>
        </UForm>
      </div>
    </u-container>
  </div>
</template>
