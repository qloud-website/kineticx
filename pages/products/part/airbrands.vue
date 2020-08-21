<template>
  <section class="text-gray-500 bg-gray-900 body-font py-8">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          v-scroll-reveal="{ delay: 100 }"
          class="sm:text-5xl text-2xl font-medium font-subheading mb-4 text-white"
        >
          Airbands
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-scroll-reveal="{ delay: 300 }" class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex p-2 h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/airbrands/99959.jpg"
            />
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 400 }" class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex p-2 h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/airbrands/99959_4.jpg"
            />
          </div>
        </div>

        <div v-scroll-reveal="{ delay: 500 }" class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex p-2 h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/airbrands/99959_2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
