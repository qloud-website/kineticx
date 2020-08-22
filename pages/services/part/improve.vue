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
            Improve safely
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description"
          >
            Combining latest research and technology in body and sport science
            to improve your physique performance safely.
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            v-scroll-reveal.reset="{ delay: 300 }"
            class="object-cover object-center rounded"
            alt="hero"
            src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/improve/image-3.jpg"
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
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/improve/image-1.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Body Correction Program
            </h2>
            <p class="leading-relaxed font-description">
              Exercises that stretch, strengthen and train you as you heal and
              develop body awareness and movement skills
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
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/improve/image-2.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Telehab Virtual
            </h2>
            <p class="leading-relaxed font-description">
              Train everywhere, anytime and get the same smart result.
            </p>
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
