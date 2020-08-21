<template>
  <section>
    <section class="text-gray-500 body-font bg-gray-900 mt-4">
      <div class="container px-5 mx-auto">
        <div v-show="$isMobile()" class="flex flex-wrap">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <div class="w-full py-2">
                <div
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
                  :class="
                    $route.query.c === 'evaluate'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  @click="changeRoute('/services', 'evaluate')"
                >
                  <img
                    class="h-16 rounded w-full object-cover object-center mb-4"
                    src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/evaluate/image-1.jpg"
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium font-subheading">
                    EVALUATE
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full">
                <div
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
                  :class="
                    $route.query.c === 'rehab'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  @click="changeRoute('/services', 'rehab')"
                >
                  <img
                    class="h-16 rounded w-full object-cover object-center mb-4"
                    src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-2.jpg"
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium font-subheading">
                    REHABILITATE
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full">
                <div
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
                  :class="
                    $route.query.c === 'improve'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  @click="changeRoute('/services', 'improve')"
                >
                  <img
                    class="h-16 rounded w-full object-cover object-center mb-4"
                    src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/improve/image-1.jpg"
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium font-subheading">
                    IMPROVE
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full">
                <div
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
                  :class="
                    $route.query.c === 'recovery'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  @click="changeRoute('/services', 'recovery')"
                >
                  <img
                    class="h-16 rounded w-full object-cover object-center mb-4"
                    src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/recovery/image-2.jpg"
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium font-subheading">
                    RECOVERY
                  </h2>
                </div>
              </div></swiper-slide
            >
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </div>
        <div v-show="!$isMobile()" class="flex flex-wrap -m-6">
          <div class="w-1/4 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                $route.query.c === 'evaluate'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              @click="changeRoute('/services', 'evaluate')"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/evaluate/image-1.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium font-subheading">
                EVALUATE
              </h2>
            </div>
          </div>
          <div class="w-1/4 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                $route.query.c === 'rehab' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              @click="changeRoute('/services', 'rehab')"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-2.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium font-subheading">
                REHABILITATE
              </h2>
            </div>
          </div>
          <div class="w-1/4 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                $route.query.c === 'improve' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              @click="changeRoute('/services', 'improve')"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/improve/image-1.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium font-subheading">
                IMPROVE
              </h2>
            </div>
          </div>
          <div class="w-1/4 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                $route.query.c === 'recovery'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              @click="changeRoute('/services', 'recovery')"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/recovery/image-2.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium font-subheading">
                RECOVERY
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Evaluate v-if="$route.query.c === 'evaluate'" />
    <Rehab v-if="$route.query.c === 'rehab'" />
    <Improve v-if="$route.query.c === 'improve'" />
    <Recovery v-if="$route.query.c === 'recovery'" />
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Evaluate from '~/pages/services/part/evaluate'
import Rehab from '~/pages/services/part/rehab'
import Improve from '~/pages/services/part/improve'
import Recovery from '~/pages/services/part/recovery'

import 'swiper/css/swiper.css'

export default {
  name: 'SwiperExampleMultipleSlidesPerBiew',
  title: 'Multiple slides per view',
  scrollToTop: true,
  components: {
    Evaluate,
    Rehab,
    Improve,
    Recovery,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      currentServices: 'Evaluate',
    }
  },
  methods: {
    changeRoute(location, params) {
      this.$router.push({ path: location, query: { c: params } })
    },
  },
}
</script>

<style>
.swiper-slide {
  width: 80%;
}
</style>
