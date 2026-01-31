<script lang="ts" setup></script>
<template>
  <section
    aria-label="Hero section"
    class="bg-background absolute top-0 z-0 h-150 w-full flex-none gap-0 overflow-hidden mask-t-from-transparent mask-t-to-black mask-t-to-37%"
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
        class="from-primary-300 to-primfrom-primary/0 absolute top-0 right-0 left-0 h-103.75 flex-none bg-linear-to-b"
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
  </section>
</template>
