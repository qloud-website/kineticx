<template>
  <section>
    <!-- Hero -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="w-full">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <div
              class="h-screen rounded-md overflow-hidden bg-cover bg-center"
              style="background-image: url('/img/slider/249487.png');"
            >
              <div
                class="bg-black bg-opacity-50 flex items-center h-full px-20 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="px-10 max-w-xl">
                  <h2 class="text-5xl text-white font-semibold font-heading">
                    Telehab Virtual
                  </h2>
                  <p class="mt-2 leading-relaxed text-gray-400 font-subheading">
                    Train everywhere, anytime and get the same smart result.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="h-screen rounded-md overflow-hidden bg-cover bg-center"
              style="background-image: url('/img/slider/image-5.jpg');"
            >
              <div
                class="bg-black bg-opacity-25 flex items-center h-full px-1 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="px-10 max-w-xl">
                  <h2 class="text-5xl text-white font-semibold font-heading">
                    World-class Testing Technologies
                  </h2>
                  <p class="mt-2 leading-relaxed text-gray-400 font-subheading">
                    Helping active individuals and sport and medical
                    professionals to get the right information, for the right
                    decision at the right time.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="h-screen rounded-md overflow-hidden bg-cover bg-center"
              style="background-image: url('/img/slider/image-6.jpg');"
            >
              <div
                class="bg-black bg-opacity-25 flex items-center justify-end text-right h-full px-1 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="px-10 max-w-xl">
                  <h2 class="text-5xl text-white font-semibold font-heading">
                    The Best in Field-based Measurement
                  </h2>
                  <p class="mt-2 leading-relaxed text-gray-400 font-subheading">
                    Helping active individuals and sport and medical
                    professionals to get the right information, for the right
                    decision at the right time.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="h-screen rounded-md overflow-hidden bg-cover bg-center"
              style="background-image: url('/img/slider/image-4.jpg');"
            >
              <div
                class="bg-black bg-opacity-25 flex items-center h-full px-1 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="px-10 max-w-xl">
                  <h2 class="text-5xl text-white font-semibold font-heading">
                    Train Smarter
                  </h2>
                  <p class="mt-2 leading-relaxed text-gray-400 font-subheading">
                    If you can measure it, you can improve it.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </div>
    </section>

    <!-- Content 2 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 mt-16 md:flex-row flex-col items-center"
      >
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 transition duration-500 ease-in-out transform hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 100 }"
            class="w-128 h-96 object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/evaluate.jpg"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 150 }"
            class="font-headingsm:text-5xl text-5xl mb-4 font-bold text-white"
          >
            <span class="text-blue-primary-hvr">Evaluate</span>
            <span class="font-thin">accuratelly</span>
          </h1>
          <p
            v-scroll-reveal="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description"
          >
            3D motion capture biomechanical analiysis,
            <br />Helping you see what the eye can’t
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal="{ delay: 100 }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              :to="{
                path: '/services',
                query: { c: 'evaluate' },
              }"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Content 3 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 100 }"
            class="font-headingsm:text-5xl text-5xl mb-4 font-bold text-white"
          >
            <span class="text-blue-primary-hvr">Rehabilitate</span>
            <span class="font-thin">properly</span>
          </h1>
          <p
            v-scroll-reveal="{ delay: 150 }"
            class="mb-8 leading-relaxed font-description"
          >
            Find your way back to fitness properly by carefully designed
            programs, monitored by certified professionals.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal="{ delay: 250 }"
              :to="{
                path: '/services',
                query: { c: 'rehab' },
              }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >Learn More</nuxt-link
            >
          </div>
        </div>
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 transition duration-500 ease-in-out transform hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 300 }"
            class="w-128 h-96 object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/rehab.jpg"
          />
        </div>
      </div>
    </section>

    <!-- Content 4 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
      >
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 transition duration-500 ease-in-out transform hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 100 }"
            class="w-128 h-96 object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/improve.png"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 150 }"
            class="font-headingsm:text-5xl text-5xl mb-4 font-bold text-white"
          >
            <span class="text-blue-primary-hvr">Improve</span>
            <span class="font-thin">safely</span>
          </h1>
          <p
            v-scroll-reveal="{ delay: 200 }"
            class="mb-8 leading-relaxed font-xl font-description"
          >
            Combining latest research and technology in body and sport science
            to improve your physique performance safely.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal="{ delay: 100 }"
              :to="{
                path: '/services',
                query: { c: 'improve' },
              }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Content 5 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 100 }"
            class="font-headingsm:text-5xl text-5xl mb-4 font-bold text-white"
          >
            <span class="text-blue-primary-hvr">Recover</span>
            <span class="font-thin">effectively</span>
          </h1>
          <p
            v-scroll-reveal="{ delay: 150 }"
            class="mb-8 leading-relaxed font-description"
          >
            Recover faster comfortably.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal="{ delay: 250 }"
              :to="{
                path: '/services',
                query: { c: 'recovery' },
              }"
              class="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >Learn More</nuxt-link
            >
          </div>
        </div>
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 transition duration-500 ease-in-out transform hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 300 }"
            class="w-128 h-96 object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/recover.jpg"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperExampleLoop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        effect: 'cube',
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
