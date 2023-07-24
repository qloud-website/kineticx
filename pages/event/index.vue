<template>
  <section>
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            v-scroll-reveal="{ delay: 100 }"
            class="object-cover object-center rounded h-96 w-128"
            alt="hero"
            src="https://squadmanager.s3.ap-southeast-1.amazonaws.com/event/event_1.jpg"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 150 }"
            class="font-heading sm:text-5xl text-3xl mb-4 text-white leading-none"
          >
            <span class="text-blue-primary-hvr font-bold">Integrative</span>
            <span class="font-description font-thin text-red-100">
              Rehab Science</span
            >
          </h1>
          <p
            v-scroll-reveal="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description text-gray-300"
          >
            Advance your understanding about sport biomechanics and neurology A
            continuing profesional education for S&C coaches, <br />
            physiotherapist, trainer and health professional.
          </p>
        </div>
      </div>
      <div class="px-10">
        <div
          v-scroll-reveal="{ delay: 100 }"
          class="font-heading sm:text-5xl text-3xl text-white leading-none"
        >
          <span class="fon-bold">REGISTER</span>
        </div>
        <div class="py-16 text-white text-lg">
          <table v-scroll-reveal="{ delay: 150 }" class="w-8/12">
            <tbody>
              <tr class="border-b border-t border-gray-500">
                <td class="p-5">Location</td>
                <td>:</td>
                <td>Baskara Futsal</td>
              </tr>
              <tr class="border-b border-t border-gray-500">
                <td class="p-5">Date</td>
                <td>:</td>
                <td>2 September 2023</td>
              </tr>
              <tr class="border-b border-t border-gray-500">
                <td class="p-5">Certification</td>
                <td>:</td>
                <td>Certification of Completion</td>
              </tr>
              <tr class="border-b border-t border-gray-500">
                <td class="p-5">Investment</td>
                <td>:</td>
                <td>
                  Rp 1.000.000 (early birds for 10 person) and 1.500.000 (normal
                  prize)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="https://s.id/1PPVD" class="flex justify-center pb-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white py-4 px-4 font-bold rounded"
          >
            Click for Register
          </button>
        </a>
        <div v-scroll-reveal="{ delay: 150 }" class="pb-16">
          <span class="text-blue-primary-hvr text-xl font-bold leading-none"
            >Course content</span
          ><br />
          <span class="leading-relaxed font-description text-gray-300"
            >Have you ever had a client with an injury that never healed? <br />
            This could be because the assessment process and program need
            adjustments. <br />
            In this workshop, we will discuss 4 sessions where there are topics
            on biomechanics, assessment, rehabilitation and determining the
            right program design for coaches, athletes and sports enthusiasts.
            <br />
            This workshop is designed for you as a S&C Coach, trainer,
            physiotherapist, therapist and someone interested in improving your
            rehabilitation skills.
          </span>
        </div>
        <div v-scroll-reveal="{ delay: 150 }" class="text-lg pb-16">
          <p class="font-bold text-white">Workshop Module :</p>
          <table>
            <tbody class="leading-relaxed font-description text-gray-300">
              <tr>
                <td class="w-5">•</td>
                <td>Posture, Breathing and Gait</td>
              </tr>
              <tr>
                <td class="w-5">•</td>
                <td>Holistic vision in the treatment of injuries</td>
              </tr>
              <tr>
                <td class="w-5">•</td>
                <td>Assessment-Transfer measure to train</td>
              </tr>
              <tr>
                <td class="w-5">•</td>
                <td>Rehab exercise selection and programming</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-scroll-reveal="{ delay: 150 }" class="pb-8 flex justify-end">
          <div>
            <p class="font-bold">Instructors :</p>
            <p class="text-gray-300 text-sm pt-2 font-bold">
              David Diéguez Ferreiro
            </p>
            <p class="text-gray-300 text-sm pt-2 font-bold">
              Awang Firmansyah, S.Or., M.Kes
            </p>
          </div>
          <div class="ml-12">
            <p class="font-bold">Contact Person :</p>
            <p class="text-gray-300 text-sm pt-2 font-bold">
              +62 822-3311-5892 (Lutfi)
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      swiperOption2: {
        slidesPerView: 6,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      activeProduct: 'Airbrands',
    }
  },
}
</script>

<style>
.swiper-slide {
  width: 100%;
}
</style>
