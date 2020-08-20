<template>
  <section>
    <section class="text-gray-500 body-font bg-gray-900 mt-4">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-6">
          <div class="xl:w-1/4 md:w-1/2 p-6">
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
              <h2 class="text-lg text-white font-medium title-font">
                EVALUATE
              </h2>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-6">
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
              <h2 class="text-lg text-white font-medium title-font">
                REHABILITATE
              </h2>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-6">
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
              <h2 class="text-lg text-white font-medium title-font">
                RECOVERY
              </h2>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-6">
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
              <h2 class="text-lg text-white font-medium title-font">
                IMPROVE
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
import Evaluate from '~/pages/services/part/evaluate'
import Rehab from '~/pages/services/part/rehab'
import Improve from '~/pages/services/part/improve'
import Recovery from '~/pages/services/part/recovery'

export default {
  scrollToTop: true,
  components: {
    Evaluate,
    Rehab,
    Improve,
    Recovery,
  },
  data() {
    return {
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

<style></style>
