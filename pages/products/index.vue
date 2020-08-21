<template>
  <section>
    <section class="text-gray-500 body-font bg-gray-900">
      <div class="container py-10 mx-auto">
        <div v-show="$isMobile()" class="flex flex-wrap">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Airbrands'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Airbrands'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    Airbands
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Humantrack'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Humantrack'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    Humantrack
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Nordbord'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Nordbord'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    Nordbord
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Forceframe'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Forceframe'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    ForceFrame
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Decks' ? 'bg-blue-primary' : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Decks'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    ForceDecks
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Telehab'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Telehab'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    Telehab
                  </h2>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="w-full px-2">
                <div
                  :class="
                    activeProduct == 'Recovery'
                      ? 'bg-blue-primary'
                      : 'bg-gray-800'
                  "
                  class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
                  @click="activeProduct = 'Recovery'"
                >
                  <h2 class="text-lg text-white font-medium font-subheading">
                    Recovery
                  </h2>
                </div>
              </div></swiper-slide
            >
          </swiper>
        </div>
        <div v-show="!$isMobile()" class="flex flex-wrap -m-8">
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Airbrands' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Airbrands'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                Airbands
              </h2>
            </div>
          </div>
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Humantrack'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Humantrack'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                Humantrack
              </h2>
            </div>
          </div>
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Nordbord' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Nordbord'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                Nordbord
              </h2>
            </div>
          </div>
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Forceframe'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Forceframe'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                ForceFrame
              </h2>
            </div>
          </div>
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Decks' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Decks'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                ForceDecks
              </h2>
            </div>
          </div>
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Telehab' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Telehab'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                Telehab
              </h2>
            </div>
          </div>
          <div class="w-1/6 p-4">
            <div
              :class="
                activeProduct == 'Recovery' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Recovery'"
            >
              <h2 class="text-lg text-white font-medium font-subheading">
                Recovery
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Humantrack v-if="activeProduct === 'Humantrack'" />
    <Airbrands v-if="activeProduct === 'Airbrands'" />
    <Decks v-if="activeProduct === 'Decks'" />
    <Forceframe v-if="activeProduct === 'Forceframe'" />
    <Nordbord v-if="activeProduct === 'Nordbord'" />
    <Telehab v-if="activeProduct === 'Telehab'" />
    <Recovery v-if="activeProduct === 'Recovery'" />
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Humantrack from '~/pages/products/part/humantrack'
import Airbrands from '~/pages/products/part/airbrands'
import Decks from '~/pages/products/part/decks'
import Forceframe from '~/pages/products/part/forceframe'
import Nordbord from '~/pages/products/part/nordbord'
import Telehab from '~/pages/products/part/telehab'
import Recovery from '~/pages/products/part/recovery'

export default {
  components: {
    Humantrack,
    Airbrands,
    Decks,
    Forceframe,
    Nordbord,
    Telehab,
    Recovery,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      activeProduct: 'Airbrands',
    }
  },
}
</script>

<style>
.swiper-slide {
  width: 100%;
}
</style>
