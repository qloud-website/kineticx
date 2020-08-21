<template>
  <section class="text-gray-500 bg-gray-900 body-font py-8">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          v-scroll-reveal="{ delay: 100 }"
          class="sm:text-5xl text-2xl font-medium font-subheading mb-4 text-white"
        >
          Recovery Equipment
        </h1>
        <p
          v-scroll-reveal="{ delay: 200 }"
          class="lg:w-2/3 mx-auto leading-relaxed font-description"
        >
          Combining advanced, real - team data visualisation and cloud
          analytics, the NordBord accurately measure,monitors,and trains an
          individua's hamstring strength and imbalance.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-scroll-reveal="{ delay: 300 }" class="lg:w-1/2 sm:w-1/2 p-4">
          <div class="flex relative h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/recovery/image-1.jpg"
            />
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 400 }" class="lg:w-1/2 sm:w-1/2 p-4">
          <div class="flex relative h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/recovery/image-2.png"
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
