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
        ></p>
      </div>
      <div class="flex flex-wrap -m-4 object-center">
        <div v-scroll-reveal="{ delay: 300 }" class="lg:w-full sm:w-full p-4">
          <img
            alt="gallery"
            class="object-center"
            src="~/assets/img/products/recovery/rcvry.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
