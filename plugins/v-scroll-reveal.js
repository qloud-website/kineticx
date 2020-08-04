import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  mobile: true,
  delay: 200,
  duration: 400,
  distance: '20px',
  easing: 'ease-in-out',
  origin: 'bottom',
  scale: 1,
})
