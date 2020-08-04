<template>
  <section>
    <TopNavigation />
    <slide-y-up-transition :duration="400" :delay="100">
      <Nuxt />
    </slide-y-up-transition>

    <Footer />
  </section>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import TopNavigation from '~/components/Navigation/TopNavigation'
import Footer from '~/components/Navigation/Footer'

export default {
  components: {
    TopNavigation,
    Footer,
    SlideYUpTransition,
  },
}
</script>

<style></style>
