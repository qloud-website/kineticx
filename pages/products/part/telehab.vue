<template>
  <section class="text-gray-500 bg-gray-900 body-font py-8">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          v-scroll-reveal.reset="{ delay: 100 }"
          class="sm:text-5xl text-2xl font-medium font-subheading mb-4 text-white"
        >
          Telehab
        </h1>
        <p
          v-scroll-reveal.reset="{ delay: 200 }"
          class="lg:w-2/3 mx-auto leading-relaxed font-description"
        >
          Prescribe exercise programs remotely. Monitor athlete compliance from
          anywhere. Oh, and it's completely free. No catch, just free.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-scroll-reveal.reset="{ delay: 300 }"
          class="lg:w-1/2 sm:w-1/2 p-4"
        >
          <div class="flex relative h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="~/assets/img/products/telehab/1.jpg"
            />
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 transition duration-500 ease-in-out hover:opacity-100"
            >
              <h2
                class="tracking-widest text-sm font-subheading font-medium text-blue-500 mb-1"
              >
                THE SUBTITLE
              </h2>
              <h1 class="font-subheading text-lg font-medium text-white mb-3">
                Shooting Stars
              </h1>
              <p class="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div
          v-scroll-reveal.reset="{ delay: 400 }"
          class="lg:w-1/2 sm:w-1/2 p-4"
        >
          <div class="flex relative h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="~/assets/img/products/telehab/2.png"
            />
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 transition duration-500 ease-in-out hover:opacity-100"
            >
              <h2
                class="tracking-widest text-sm font-subheading font-medium text-blue-500 mb-1"
              >
                THE SUBTITLE
              </h2>
              <h1 class="font-subheading text-lg font-medium text-white mb-3">
                Shooting Stars
              </h1>
              <p class="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>

        <div
          v-scroll-reveal.reset="{ delay: 500 }"
          class="lg:w-1/3 sm:w-1/2 p-4"
        >
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="~/assets/img/products/telehab/3.png"
              width="20%"
              height="20%"
            />
            <div
              class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
            >
              <h2
                class="tracking-widest text-sm font-subheading font-medium text-blue-500 mb-1"
              >
                THE SUBTITLE
              </h2>
              <h1 class="font-subheading text-lg font-medium text-white mb-3">
                The 400 Blows
              </h1>
              <p class="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
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
