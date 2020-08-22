<template>
  <section>
    <TopNavigation />
    <slide-y-up-transition :duration="400" :delay="100">
      <Nuxt />
    </slide-y-up-transition>
    <!-- Wrapper -->
    <div class="py-8"></div>
    <Footer />
  </section>
</template>

<script>
import Vue from 'vue'
import VueMobileDetection from 'vue-mobile-detection'
import { SlideYUpTransition } from 'vue2-transitions'
import TopNavigation from '~/components/Navigation/TopNavigation'
import Footer from '~/components/Navigation/Footer'
Vue.use(VueMobileDetection)

export default {
  components: {
    TopNavigation,
    Footer,
    SlideYUpTransition,
  },
}
</script>

<style></style>
