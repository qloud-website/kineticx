<template>
  <section>
    <!-- Main Content -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            v-scroll-reveal.reset="{ delay: 100 }"
            class="font-heading sm:text-5xl text-5xl mb-4 font-medium text-white"
          >
            Rehabilitate properly
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description"
          >
            Find your way back to fitness properly by carefully designed
            programs, monitored by certified professionals.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal.reset="{ delay: 300 }"
            class="object-cover object-center rounded h-96 w-full"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-3.jpg"
          />
        </div>
      </div>
    </section>

    <!-- Content 2, 3, 4, 5 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="container px-5 py-4 mx-auto">
        <div class="flex flex-wrap justify-center -mx-4 -mb-10">
          <div
            v-scroll-reveal.reset="{ delay: 350 }"
            class="sm:w-1/2 mb-10 p-4"
          >
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-1.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              General Injury Treatment
            </h2>
            <p class="leading-relaxed text-md font-description">
              Injury caused by daily activities or lifestyle. Lower back pain
              from sitting too long, shoulder pain after pregnancy and knee pain
              in elderly people are among the most common injuries.
            </p>
          </div>
          <div
            v-scroll-reveal.reset="{ delay: 400 }"
            class="sm:w-1/2 mb-10 p-4"
          >
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-2.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Sport Injury Treatment
            </h2>
            <p class="leading-relaxed font-description">
              Our sports injury specialists use evidence-based practice to treat
              sports injuries in the shortest possible time.
            </p>
          </div>
          <div
            v-scroll-reveal.reset="{ delay: 2450 }"
            class="sm:w-1/2 mb-10 p-4"
          >
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/rehab/image-3.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Pre/Post Surgery Treatment
            </h2>
            <p class="leading-relaxed font-description"></p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
