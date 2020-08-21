<template>
  <section>
    <!-- Main Content -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center"
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
            class="font-heading sm:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Evaluate accuratelly
          </h1>
          <p
            v-scroll-reveal.reset="{ delay: 200 }"
            class="mb-8 leading-relaxed font-description"
          >
            3D motion capture biomechanical analiysis, <br />
            Helping you see what the eye can’t
          </p>
        </div>
      </div>
    </section>

    <!-- Content 2, 3, 4, 5 -->
    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="container px-5 py-4 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10">
          <div class="sm:w-1/2 mb-10 p-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/humantrack/humantrack-2.png"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Human Movement Screening
            </h2>
            <p class="leading-relaxed font-description">
              Measure your movement patterns that have lead to injury. Our
              toolbox of assesment include balance and posture, range of motion.
              People with back pain, knee, shoulder injuries, headaches or
              pre/post surgery.
            </p>
          </div>
          <div class="sm:w-1/2 mb-10 p-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/evaluate/image-2.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Muscle Strength Test
            </h2>
            <p class="leading-relaxed font-description">
              Muscle strength testing is an important component of the physical
              exam that can be used to evaluate weakness in our body and can be
              effective in differentiating true weaknesses from imbalance or
              poor endurance.
            </p>
          </div>
          <div class="sm:w-1/2 mb-10 p-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/services/evaluate/image-3.jpg"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Performance Test
            </h2>
            <p class="leading-relaxed font-description">
              The fastest, easiest and most powerful dual plate system for
              analysing neuromuscular strength, performance and imbalance.
            </p>
          </div>
          <div class="sm:w-1/2 mb-10 p-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://qloud-website.s3-ap-southeast-1.amazonaws.com/c/kineticx/products/force-frame/IMG_4794.JPG"
              />
            </div>
            <h2
              class="font-heading text-5xl font-medium text-white mt-6 mb-3 leading-none"
            >
              Return to Sport Test
            </h2>
            <p class="leading-relaxed font-description">
              Measuring and gathering data used by clinicians to evaluate the
              individual's readiness to return safely to sport.
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
