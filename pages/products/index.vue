<template>
  <section>
    <section class="text-gray-500 body-font bg-gray-900">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-8">
          <div class="w-1/5 p-4">
            <div
              :class="
                activeProduct == 'Humantrack'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Humantrack'"
            >
              <h2 class="text-lg text-white font-medium title-font">
                Humantrack
              </h2>
            </div>
          </div>
          <div class="w-1/5 p-4">
            <div
              :class="
                activeProduct == 'Nordbord' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Nordbord'"
            >
              <h2 class="text-lg text-white font-medium title-font">
                Nordbord
              </h2>
            </div>
          </div>
          <div class="w-1/5 p-4">
            <div
              :class="
                activeProduct == 'Forceframe'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Forceframe'"
            >
              <h2 class="text-lg text-white font-medium title-font">
                ForceFrame
              </h2>
            </div>
          </div>
          <div class="w-1/5 p-4">
            <div
              :class="
                activeProduct == 'Airbrands' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Airbrands'"
            >
              <h2 class="text-lg text-white font-medium title-font">
                Airbrands
              </h2>
            </div>
          </div>
          <div class="w-1/5 p-4">
            <div
              :class="
                activeProduct == 'Decks' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-x-110"
              @click="activeProduct = 'Decks'"
            >
              <h2 class="text-lg text-white font-medium title-font">
                ForceDecks
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
  </section>
</template>

<script>
import Humantrack from '~/pages/products/part/humantrack'
import Airbrands from '~/pages/products/part/airbrands'
import Decks from '~/pages/products/part/decks'
import Forceframe from '~/pages/products/part/forceframe'
import Nordbord from '~/pages/products/part/nordbord'

export default {
  components: {
    Humantrack,
    Airbrands,
    Decks,
    Forceframe,
    Nordbord,
  },
  data() {
    return {
      activeProduct: 'Humantrack',
    }
  },
}
</script>

<style></style>
