<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const appConfig = useAppConfig();
</script>

<template>
  <div class="bg-linear-to-br from-primary-200 from-32% to-white to-87% w-full">
    <UFooter
      class="relative text-black"
      :ui="{
        bottom: 'py-0 lg:py-0',
        container: 'mb-15',
        center: 'items-start w-full justify-between flex-wrap pt-15',
      }"
    >
      <template #top> </template>

      <template #default>
        <div>
          <div class="flex items-center gap-2 font-normal text-2xl select-none">
            <span class="font-black">BNJ</span> Team Maker
          </div>

          <div>
            <a
              href="mailto:benjaminparienty@gmail.com"
              class="mb-2 font-bold block"
            >
              benjaminparienty@gmail.com
            </a>
          </div>

          <a
            href="https://www.linkedin.com/company/bnjteammaker/"
            target="_blank"
          >
            <u-icon :name="`i-simple-icons-linkedin`" class="size-6" />
          </a>
        </div>

        <div class="flex flex-wrap justify-between gap-20 w-">
          <div class="flex flex-col">
            <div class="opacity-50">
              {{ $t("services.label") }}
            </div>
            <nuxt-link
              v-for="i in 4"
              :to="
                $localePath({
                  name: 'services-' + $t(`services.list.${i}.code`),
                })
              "
            >
              {{ $t(`services.list.${i - 1}.title`) }}
            </nuxt-link>
          </div>

          <div class="flex flex-col">
            <div class="opacity-50">Company</div>
            <a href="">Blog</a>
            <a href="">About us</a>
            <nuxt-link :to="$localePath({ name: 'careers' })">
              Careers
            </nuxt-link>
            <nuxt-link :to="$localePath({ name: 'contact' })">
              Contact
            </nuxt-link>
          </div>

          <div class="flex flex-col">
            <div class="opacity-50">Legal</div>
            <a href="">Site credit</a>
            <a href="">Telemetry Compliance</a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy</a>
            <a href="">Security</a>
          </div>
        </div>
      </template>

      <template #right> </template>

      <template #bottom>
        <div class="w-full px-m lg:px-2xl pointer-events-none">
          <div class="w-full justify-center">
            <div
              class="mask-[url(/images/logo-big.svg)] mask-no-repeat mask-contain mask- bg-primary-950 w-10/12 mx-auto"
            >
              <img
                src="/images/logo-big.svg"
                alt="BNJ Team Maker logo"
                class="w-full object-contain opacity-0"
              />
            </div>
          </div>
        </div>
      </template>
    </UFooter>
  </div>
</template>
