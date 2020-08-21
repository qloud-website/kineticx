<template>
  <section class="text-gray-500 bg-gray-900 body-font py-8">
    <div class="container px-5 mx-auto flex flex-wrap">
      <div class="flex items-center w-full mb-20 flex-wrap">
        <h1
          v-scroll-reveal="{ delay: 100 }"
          class="sm:text-5xl text-2xl font-medium font-subheading text-white lg:w-1/3 lg:mb-0 mb-4"
        >
          Decks
        </h1>
        <p
          v-scroll-reveal="{ delay: 200 }"
          class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed font-description"
        >
          Dual high-accuracy force platforms and seamless auto-analysis
          software. Analyse balance, strength and movement strategies in a range
          ofexercises and jumps.
        </p>
      </div>
      <div v-scroll-reveal="{ delay: 300 }" class="flex flex-wrap md:-m-2 -m-1">
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/decks/IMG_4820.jpg"
            />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full h-full object-cover object-center block"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/decks/002.jpg"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/decks/forcedecks-2.jpg"
            />
          </div>
          <div class="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/decks/004.jpg"
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
