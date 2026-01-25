<script setup lang="ts">
const testimonials = ref([
  {
    user: {
      name: "Julien Picard",
      description: "Directeur commercial",
      avatar: {
        src: "/images/partners/Julien_Picard.jpeg",
        alt: "Julien Picard",
      },
    },
    quote:
      "Benjamin nous a mis en relation avec Ibrahima, spécialiste en lead generation. Il alimente quotidiennement notre CRM avec de nouveaux prospects. Depuis, nos commerciaux obtiennent plus de rendez-vous et notre chiffre d’affaires a augmenté !",
  },
  {
    user: {
      name: "Mathieu Dumont",
      description: "SOrganisateur de voyages",
      avatar: {
        src: "/images/partners/Mathieu_Dumont.jpeg",
        alt: "Mathieu Dumont",
      },
    },
    quote:
      "Dans mon activité, une bonne gestion des réseaux sociaux est essentielle. Cependant, cela me demandait énormément de temps, et recruter un community manager en France s'avérait onéreux. Grâce à Benjamin, j’ai pu collaborer avec Domoina qui gère toute ma communication et qui a tous les jours des nouvelles idées de création !",
  },
  {
    user: {
      name: "Sara Vallée",
      description: "SConsultante en recrutement",
      avatar: {
        src: "/images/partners/Sara_Vallée.jpeg",
        alt: "Sara Vallée",
      },
    },
    quote:
      "Grâce à BNJ Team Maker, je travaille avec Julius, qui gère l’ensemble de mon sourcing. Cette solution me permet de me concentrer pleinement sur la prospection et le suivi de mes clients, afin d’offrir un service de qualité supérieure et à forte valeur ajoutée.",
  },

  {
    user: {
      name: "Igor Minar",
      description: "Software Engineer at Cloudflare",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/216296?v=4",
        alt: "Igor Minar",
      },
    },
    quote:
      "I love the polish and the batteries-included approach. NuxtHub takes web framework and hosting integration to a new level!",
  },
  {
    user: {
      name: "Charlie Hield",
      description: "Senior Creative Technologist",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/527849?v=4",
        alt: "Charlie Hield",
      },
    },
    quote:
      "NuxtHub is hands down the easiest way to get a project from zero to production on the Cloudflare stack!",
  },
  {
    user: {
      name: "Israel Ortuño",
      description: "Co-founder of VueJobs",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/1769417?v=4",
        alt: "Israel Ortuño",
      },
    },
    quote:
      "I can't find an excuse to not go full-stack with Nuxt from now on. Ship fast the Nuxt way, zero config. Just plug & deploy.",
  },
]);
</script>

<template>
  <section class="py-20 bg-gray-50 w-full">
    <u-container>
      <UPageColumns class="gap-4 space-y-4">
        <UPageCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          variant="soft"
          class="rounded-2xl border border-primary-300"
          :description="testimonial.quote"
          :ui="{
            description: 'text-xl',
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
  </section>
</template>
