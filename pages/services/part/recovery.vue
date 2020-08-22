<template>
  <section>
    <!-- Main Content -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            v-scroll-reveal="{ delay: 100 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/recovery/image-3.jpg"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 150 }"
            class="font-heading sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Recover Effectively
          </h1>
          <p
            v-scroll-reveal="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description font-xl"
          >
            Recover faster comfortably.
          </p>
        </div>
      </div>
    </section>

    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal="{ delay: 100 }"
            class="font-heading sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Muscle Release Stretch
          </h1>
          <p
            v-scroll-reveal="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description"
          >
            Relax and you will recover in no time.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal="{ delay: 300 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/recovery/image-4.jpeg"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
