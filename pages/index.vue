<template>
  <section>
    <!-- Hero -->
    <section class="text-gray-500 bg-dark body-font">
      <div class="w-full">
        <div
          class="h-168 rounded-md overflow-hidden bg-cover bg-center"
          style="background-image: url('/img/slider/image-5.jpg');"
        >
          <div class="bg-dark bg-opacity-50 flex items-center h-full px-20">
            <div class="px-10 max-w-xl">
              <h2 class="text-4xl text-white font-semibold">
                Athlete Testing Technologies
              </h2>
              <p class="mt-2 leading-relaxed text-gray-400">
                Helping high performance sport and tactical professionals to get
                the right information, for the right decision at the right time.
                .
              </p>
              <nuxt-link
                v-scroll-reveal.reset="{ delay: 250 }"
                to="/products"
                class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Learn More
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content 2 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            v-scroll-reveal.reset="{ delay: 100 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/evaluate/image-1.jpg"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            v-scroll-reveal.reset="{ delay: 150 }"
            class="title-font sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Evaluate accuratelly
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 200 }"
            class="mb-8 leading-relaxed font-xl"
          >
            3D motion capture biomechanical analiysis, <br />
            Helping you see what the eye can’t
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal.reset="{ delay: 100 }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              :to="{
                path: '/services',
                query: { c: 'evaluate' },
              }"
            >
              Learn More
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Content 3 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal.reset="{ delay: 100 }"
            class="title-font sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Rehabilitate properly
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 150 }"
            class="mb-8 leading-relaxed"
          >
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal.reset="{ delay: 250 }"
              :to="{
                path: '/services',
                query: { c: 'rehab' },
              }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Learn More
            </nuxt-link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal.reset="{ delay: 300 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-2.jpg"
          />
        </div>
      </div>
    </section>

    <!-- Content 4 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            v-scroll-reveal.reset="{ delay: 100 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/improve/image-1.jpg"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            v-scroll-reveal.reset="{ delay: 150 }"
            class="title-font sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Improve safely
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 200 }"
            class="mb-8 leading-relaxed font-xl"
          >
            combining latest research and technology in body in sport science to
            improve your performance safely.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal.reset="{ delay: 100 }"
              :to="{
                path: '/services',
                query: { c: 'improve' },
              }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Learn More
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Content 5 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal.reset="{ delay: 100 }"
            class="title-font sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Revocery properly
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 150 }"
            class="mb-8 leading-relaxed"
          >
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal.reset="{ delay: 250 }"
              :to="{
                path: '/services',
                query: { c: 'recovery' },
              }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Learn More
            </nuxt-link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal.reset="{ delay: 300 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/recovery/image-2.jpg"
          />
        </div>
      </div>
    </section>

    <!-- Content 6 & 7 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/humantrack/humantrack-2.png"
              />
            </div>
            <h2 class="title-font text-5xl font-medium text-white mt-6 mb-3">
              State of the art technology
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/force-frame/IMG_4794.JPG"
              />
            </div>
            <h2 class="title-font text-5xl font-medium text-white mt-6 mb-3">
              Train effectively
            </h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-500 bg-gray-900 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
        <div
          class="w-full h-128 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            title="map"
            class="absolute inset-0"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style="filter: grayscale(1) contrast(1.2) opacity(0.16);"
          ></iframe>
          <div class="bg-gray-900 relative flex flex-wrap py-6">
            <div class="lg:w-1/2 px-6">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm"
              >
                ADDRESS
              </h2>
              <p class="leading-relaxed">
                Jln . Musi 20 Surabaya , Jawa Timur, Indonesia
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2
                class="title-font font-medium text-white tracking-widest text-sm"
              >
                EMAIL
              </h2>
              <a class="text-blue-500 leading-relaxed">admin@kineticx.id</a>
              <h2
                class="title-font font-medium text-white tracking-widest text-sm mt-4"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
}
</script>
