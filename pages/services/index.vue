<template>
  <section>
    <section class="text-gray-500 body-font bg-gray-900">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-6">
          <div class="xl:w-1/3 md:w-1/2 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                currentServices === 'Evaluate'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              @click="currentServices = 'Evaluate'"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="/services/evaluate/image-1.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium title-font">
                EVALUATE
              </h2>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                currentServices === 'Rehab' ? 'bg-blue-primary' : 'bg-gray-800'
              "
              @click="currentServices = 'Rehab'"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="/services/rehab/image-2.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium title-font">
                REHAB
              </h2>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-6">
            <div
              class="p-4 rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-blue-primary transform hover:scale-105"
              :class="
                currentServices === 'Improve'
                  ? 'bg-blue-primary'
                  : 'bg-gray-800'
              "
              @click="currentServices = 'Improve'"
            >
              <img
                class="h-16 rounded w-full object-cover object-center mb-4"
                src="/services/improve/image-1.jpg"
                alt="content"
              />
              <h2 class="text-lg text-white font-medium title-font">
                IMPROVE
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Evaluate v-if="currentServices === 'Evaluate'" />
    <Rehab v-if="currentServices === 'Rehab'" />
    <Improve v-if="currentServices === 'Improve'" />
  </section>
</template>

<script>
import Evaluate from '~/pages/services/part/evaluate'
import Rehab from '~/pages/services/part/rehab'
import Improve from '~/pages/services/part/improve'

export default {
  components: {
    Evaluate,
    Rehab,
    Improve,
  },
  data() {
    return {
      currentServices: 'Evaluate',
    }
  },
}
</script>

<style></style>
