<template>
  <section>
    <!-- Hero -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="w-full">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <div
              class="h-screen overflow-hidden bg-center bg-cover rounded-md"
              style="background-image: url('/img/slider/slider-1.jpg')"
            >
              <div
                class="flex items-center h-full px-1 bg-black bg-opacity-25 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="max-w-xl px-10">
                  <h2
                    class="text-2xl font-semibold text-white sm:text-2xl md:text-4xl lg:text-5xl font-heading"
                  >
                    Telehab Virtual
                  </h2>
                  <p
                    class="mt-2 text-sm leading-relaxed text-gray-400 sm:text-sm md:text-lg lg:text-lg font-subheading"
                  >
                    Train everywhere, anytime and get the same smart result.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex px-6 py-2 mt-10 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="h-screen overflow-hidden bg-center bg-cover rounded-md"
              style="background-image: url('/img/slider/image-5.jpg')"
            >
              <div
                class="flex items-center h-full px-1 bg-black bg-opacity-25 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="max-w-xl px-10">
                  <h2
                    class="text-2xl font-semibold leading-none text-white sm:text-2xl md:text-4xl lg:text-5xl font-heading"
                  >
                    World-class Testing Technologies
                  </h2>
                  <p
                    class="mt-2 text-sm leading-relaxed text-gray-400 sm:text-sm md:text-lg lg:text-lg font-subheading"
                  >
                    Helping active individuals and sport and medical
                    professionals to get the right information, for the right
                    decision at the right time.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex px-6 py-2 mt-10 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="h-screen overflow-hidden bg-center bg-cover rounded-md"
              style="background-image: url('/img/slider/image-6.jpg')"
            >
              <div
                class="flex items-center justify-end h-full px-1 text-right bg-black bg-opacity-25 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="max-w-xl px-10">
                  <h2
                    class="text-2xl font-semibold leading-none text-white sm:text-2xl md:text-4xl lg:text-5xl font-heading"
                  >
                    The Best in Field-based Measurement
                  </h2>
                  <p
                    class="mt-2 text-sm leading-relaxed text-gray-400 sm:text-sm md:text-lg lg:text-lg font-subheading"
                  >
                    Helping active individuals and sport and medical
                    professionals to get the right information, for the right
                    decision at the right time.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex px-6 py-2 mt-10 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
                    >Learn More</nuxt-link
                  >
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="h-screen overflow-hidden bg-center bg-cover rounded-md"
              style="background-image: url('/img/slider/image-4.jpg')"
            >
              <div
                class="flex items-center h-full px-1 bg-black bg-opacity-25 sm:px-1 md:px-20 lg:px-20"
              >
                <div class="max-w-xl px-10">
                  <h2
                    class="text-2xl font-semibold text-white sm:text-2xl md:text-4xl lg:text-5xl font-heading"
                  >
                    Train Smarter
                  </h2>
                  <p
                    class="mt-2 text-sm leading-relaxed text-gray-400 sm:text-sm md:text-lg lg:text-lg font-subheading"
                  >
                    If you can measure it, you can improve it.
                  </p>
                  <nuxt-link
                    to="/products"
                    class="inline-flex px-6 py-2 mt-10 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
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
      <div class="container px-5 pt-16 mx-auto">
        <h2 class="font-thin text-white font-description">
          <span class="text-2xl font-bold text-blue-primary-hvr font-heading"
            >World-class testing equipment
          </span>
          and technologies to help active individuals and sport/medical
          professionals to get the right information, for the right decision at
          the right time.
          <span class="text-2xl font-bold text-blue-primary-hvr font-heading"
            >Providing the latest scientific-based rehabilitation, improvement,
            and recovery programs.</span
          >
        </h2>
      </div>
      <div
        class="container flex flex-col items-center px-5 pb-16 mx-auto mt-16 md:flex-row"
      >
        <div
          class="w-5/6 mb-10 transition duration-500 ease-in-out transform lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 100 }"
            class="object-cover object-center rounded w-128 h-96"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/evaluate.jpg"
          />
        </div>
        <div
          class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
        >
          <h1
            v-scroll-reveal="{ delay: 150 }"
            class="mb-4 text-5xl font-bold leading-none text-white font-heading sm:text-5xl"
          >
            <span class="text-blue-primary-hvr">Evaluate</span>
            <span class="font-thin font-subheading">accuratelly</span>
          </h1>
          <p
            v-scroll-reveal="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description"
          >
            3D motion capture biomechanical analiysis,
            <br />Helping you see what the eye can’t.
          </p>
          <div class="flex justify-center">
            <nuxt-link
              v-scroll-reveal="{ delay: 100 }"
              class="inline-flex px-6 py-2 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
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
        class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row"
      >
        <div
          class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
        >
          <h1
            v-scroll-reveal="{ delay: 100 }"
            class="mb-4 text-5xl font-bold leading-none text-white font-heading sm:text-5xl"
          >
            <span class="text-blue-primary-hvr">Rehabilitate</span>
            <span class="font-thin font-subheading">properly</span>
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
              class="inline-flex px-6 py-2 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
              >Learn More</nuxt-link
            >
          </div>
        </div>
        <div
          class="w-5/6 transition duration-500 ease-in-out transform lg:max-w-lg lg:w-full md:w-1/2 hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 300 }"
            class="object-cover object-center rounded w-128 h-96"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/rehab.jpg"
          />
        </div>
      </div>
    </section>

    <!-- Content 4 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row"
      >
        <div
          class="w-5/6 mb-10 transition duration-500 ease-in-out transform lg:max-w-lg lg:w-full md:w-1/2 md:mb-0 hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 100 }"
            class="object-cover object-center rounded w-128 h-96"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/general/improve.png"
          />
        </div>
        <div
          class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
        >
          <h1
            v-scroll-reveal="{ delay: 150 }"
            class="mb-4 text-5xl font-bold leading-none text-white font-heading sm:text-5xl"
          >
            <span class="text-blue-primary-hvr">Improve</span>
            <span class="font-thin font-subheading">safely</span>
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
              class="inline-flex px-6 py-2 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Content 5 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row"
      >
        <div
          class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
        >
          <h1
            v-scroll-reveal="{ delay: 100 }"
            class="mb-4 text-5xl font-bold leading-none text-white font-heading sm:text-5xl"
          >
            <span class="text-blue-primary-hvr">Recover</span>
            <span class="font-thin font-subheading">effectively</span>
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
              class="inline-flex px-6 py-2 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white"
              >Learn More</nuxt-link
            >
          </div>
        </div>
        <div
          class="w-5/6 transition duration-500 ease-in-out transform lg:max-w-lg lg:w-full md:w-1/2 hover:scale-110"
        >
          <img
            v-scroll-reveal="{ delay: 300 }"
            class="object-cover object-center rounded w-128 h-96"
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
        speed: 1500,
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
