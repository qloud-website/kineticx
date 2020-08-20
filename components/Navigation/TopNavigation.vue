<template>
  <header
    :class="$route.name.includes('index') ? 'w-full absolute' : ''"
    class="text-gray-500 bg-transparent body-font z-50"
  >
    <div
      class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center"
    >
      <nuxt-link
        to="/"
        class="flex title-font font-medium items-center text-white md:mb-0"
      >
        <img
          class="h-12"
          src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/logo/kineticx-logo.png"
          alt=""
        />
      </nuxt-link>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link
          to="/"
          :class="
            $route.name.includes('index') ? 'bg-blue-primary text-white' : ''
          "
          class="rounded mr-10 px-4 py-1 transition duration-500 ease-in-out hover:text-white hover:bg-blue-primary transform hover:scale-110"
          >Home
        </nuxt-link>
        <nuxt-link
          to="/products"
          :class="
            $route.name.includes('products') ? 'bg-blue-primary text-white' : ''
          "
          class="rounded mr-10 px-4 py-1 transition duration-500 ease-in-out hover:text-white hover:bg-blue-primary transform hover:scale-110"
          >Products
        </nuxt-link>
        <nuxt-link
          :to="{
            path: '/services',
            query: { c: 'evaluate' },
          }"
          :class="
            $route.name.includes('services') ? 'bg-blue-primary text-white' : ''
          "
          class="rounded mr-10 px-4 py-1 transition duration-500 ease-in-out hover:text-white hover:bg-blue-primary transform hover:scale-110"
          >Services
        </nuxt-link>
      </nav>
      <nuxt-link
        to="/contact"
        :class="
          $route.name.includes('contact') ? 'bg-blue-primary text-white' : ''
        "
        class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-primary hover:text-white rounded text-base mt-4 md:mt-0"
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
