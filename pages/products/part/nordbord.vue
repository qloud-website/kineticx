<template>
  <section class="text-gray-500 bg-gray-900 body-font py-8">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          v-scroll-reveal="{ delay: 100 }"
          class="sm:text-5xl text-2xl font-medium font-subheading mb-4 text-white"
        >
          Nordbord
        </h1>
        <p
          v-scroll-reveal="{ delay: 200 }"
          class="lg:w-2/3 mx-auto leading-relaxed font-description"
        >
          Combining advanced, real - team data visualisation and cloud
          analytics, the NordBord accurately measure,monitors,and trains an
          individual's hamstring strength and imbalance.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div v-scroll-reveal="{ delay: 300 }" class="lg:w-1/2 sm:w-1/2 p-4">
          <div class="flex relative h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/nordbord/010.jpg"
            />
          </div>
        </div>
        <div v-scroll-reveal="{ delay: 400 }" class="lg:w-1/2 sm:w-1/2 p-4">
          <div class="flex relative h-96">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/nordbord/IMG_4811.jpg"
            />
          </div>
        </div>

        <div v-scroll-reveal="{ delay: 500 }" class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/nordbord/007.png"
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
        <div v-scroll-reveal="{ delay: 600 }" class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/nordbord/005.jpg"
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
