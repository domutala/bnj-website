<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";
import MarkdownIt from "markdown-it";

const { setColor } = useHeader();
setColor("white");

const md = new MarkdownIt();
const i18n = useI18n();
const companySize = ["-20", "21-250", "251-2000", "+2000"];
const success = ref(false);

const schema = z.object({
  firstName: z
    .string(i18n.t("pages.contact.errors.firstName.required"))
    .min(2, i18n.t("pages.contact.errors.firstName.min")),
  lastName: z
    .string(i18n.t("pages.contact.errors.lastName.required"))
    .min(2, i18n.t("pages.contact.errors.lastName.required")),
  email: z.email(i18n.t("pages.contact.errors.email.invalid")),

  companyName: z
    .string(i18n.t("pages.contact.errors.companyName.required"))
    .min(2, i18n.t("pages.contact.errors.companyName.required")),
  companySize: z.enum(
    companySize,
    i18n.t("pages.contact.errors.companySize.required"),
  ),

  message: z
    .string(i18n.t("pages.contact.errors.message.required"))
    .min(10, i18n.t("pages.contact.errors.message.min"))
    .max(1000, i18n.t("pages.contact.errors.message.max")),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  companyName: undefined,
  companySize: undefined,
  message: undefined,
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

      <div
        data-layer="gradient"
        class="from-primary-300 to-primfrom-primary/0 absolute top-0 right-0 left-0 h-150 flex-none bg-linear-to-b"
      ></div>

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
          {{ $t("pages.contact.title") }}
        </h1>

        <p class="text-center mt-5 text-">
          {{ $t("pages.contact.description") }}
        </p>
      </div>

      <div class="bg-white p-10 relative">
        <p v-if="success" v-html="md.render($t('pages.contact.success'))"></p>

        <UForm
          v-else
          :schema="schema"
          :state="state"
          class="space-y-4 p-5"
          @submit="onSubmit"
        >
          <UFormField
            :label="$t('pages.contact.items.firstName')"
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
            :label="$t('pages.contact.items.lastName')"
            name="lastName"
            required
          >
            <UInput v-model="state.lastName" class="w-full" size="xl" />
          </UFormField>

          <UFormField
            :label="$t('pages.contact.items.email')"
            name="email"
            required
          >
            <UInput v-model="state.email" class="w-full" size="xl" />
          </UFormField>

          <UFormField
            :label="$t('pages.contact.items.companyName')"
            name="companyName"
            required
          >
            <UInput
              v-model="state.companyName"
              class="w-full"
              size="xl"
              required
            />
          </UFormField>

          <UFormField
            :label="$t('pages.contact.items.companySize')"
            name="companySize"
            required
          >
            <USelect
              v-model="state.companySize"
              :items="
                companySize.map((c) => ({
                  label: $t(`pages.contact.companySize.${c}`),
                  id: c,
                }))
              "
              class="w-full"
              size="xl"
              value-key="id"
            />
          </UFormField>

          <UFormField
            :label="$t('pages.contact.items.message')"
            name="message"
            required
          >
            <UTextarea v-model="state.message" class="w-full" size="xl" />
          </UFormField>

          <UButton type="submit" class="cursor-pointer" size="xl">
            {{ $t("pages.contact.submit") }}
          </UButton>
        </UForm>
      </div>
    </u-container>
  </div>
</template>
