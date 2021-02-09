<template>
  <header
    :class="$route.name.includes('index') ? 'w-full absolute' : ''"
    class="z-50 text-gray-500 bg-transparent body-font"
  >
    <div
      class="flex flex-col flex-wrap items-center px-1 py-1 sm:px-1 md:px-10 lg:px-10 md:flex-row"
    >
      <nuxt-link
        to="/"
        class="flex items-center font-medium text-white title-font md:mb-0"
      >
        <img
          class="h-24"
          src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/logo/kineticx-vald-logo-white.png"
          alt=""
        />
      </nuxt-link>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto"
      >
        <nuxt-link
          to="/"
          :class="
            $route.name.includes('index') ? 'bg-blue-primary text-white' : ''
          "
          class="px-2 py-1 mr-1 transition duration-500 ease-in-out transform rounded sm:mr-1 md:mr-10 lg:mr-10 hover:text-white hover:bg-blue-primary hover:scale-110"
          >Home
        </nuxt-link>
        <nuxt-link
          :to="{
            path: '/services',
            query: { c: 'evaluate' },
          }"
          :class="
            $route.name.includes('services') ? 'bg-blue-primary text-white' : ''
          "
          class="px-2 py-1 mr-1 transition duration-500 ease-in-out transform rounded sm:mr-1 md:mr-10 lg:mr-10 hover:text-white hover:bg-blue-primary hover:scale-110"
          >Services
        </nuxt-link>
        <nuxt-link
          to="/products"
          :class="
            $route.name.includes('products') ? 'bg-blue-primary text-white' : ''
          "
          class="px-2 py-1 mr-1 transition duration-500 ease-in-out transform rounded sm:mr-1 md:mr-10 lg:mr-10 hover:text-white hover:bg-blue-primary hover:scale-110"
          >Products
        </nuxt-link>
        <nuxt-link
          v-show="$device.isMobile"
          to="/contact"
          :class="
            $route.name.includes('contact') ? 'bg-blue-primary text-white' : ''
          "
          class="px-2 py-1 mr-1 transition duration-500 ease-in-out transform rounded sm:mr-1 md:mr-10 lg:mr-10 hover:text-white hover:bg-blue-primary hover:scale-110"
          >Contact
        </nuxt-link>
      </nav>
      <nuxt-link
        v-show="!$device.isMobile"
        to="/contact"
        :class="
          $route.name.includes('contact') ? 'bg-blue-primary text-white' : ''
        "
        class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-blue-primary hover:text-white md:mt-0"
      >
        Contact Us
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigation: 'index',
    }
  },
}
</script>

<style></style>
