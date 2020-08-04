<template>
  <header class="text-gray-500 bg-gray-900 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-2xl">KineticX</span>
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link to="/" class="mr-10 hover:text-white">Home</nuxt-link>
        <nuxt-link to="/about" class="mr-10 hover:text-white"
          >About Us</nuxt-link
        >
        <nuxt-link to="/products" class="mr-10 hover:text-white"
          >Product</nuxt-link
        >
        <nuxt-link to="/news" class="mr-10 hover:text-white">News</nuxt-link>
        <nuxt-link to="/contact" class="mr-10 hover:text-white"
          >Contact</nuxt-link
        >
      </nav>
      <button
        class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Button
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
