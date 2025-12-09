<template>
  <div class="min-h-[55vh]">
    <!--Our Projects-->
    <div class="flex flex-col justify-center items-center my-10 w-full">
      <div class="bg-blue-950 lg:w-3/5 w-[90%]">
        <h1
          data-aos="slide-right"
          data-aos-duration="1200"
          class="text-center text-blue-400 text-3xl p-3 font-serif"
        >
          Our Projects
        </h1>
      </div>

      <!--The projects-->
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-6">
        <div
          class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4"
        >
          <img
            src="../assets/sunrevoproject1.jpg"
            alt="services image"
            class="rounded-t-2xl w-full"
          />
          <p class="text-center font-semibold text-xl my-2 text-blue-900">
            High-Performance SunRevo Battery
          </p>
          <router-link to="/services" class="w-[90%]"
            ><button
              class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400"
            >
              View Project
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4"
        >
          <img
            src="../assets/sunrevoproject22.jpg"
            alt="services image"
            class="rounded-t-2xl w-full"
          />
          <p class="text-center font-semibold text-xl my-2 text-blue-900">
            Reliable Home Power Backup
          </p>
          <router-link to="/services" class="w-[90%]"
            ><button
              class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400"
            >
              View Project
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="rounded-t-2xl lg:w-[360px] w-full flex flex-col justify-between bg-white shadow-lg items-center pb-4"
        >
          <img
            src="../assets/waterheater.jpg"
            alt="services image"
            class="rounded-t-2xl w-full h-3/5"
          />
          <p class="text-center font-semibold text-xl my-2 text-blue-900">
            Installtion of Solar Water Heater
          </p>
          <router-link to="/services" class="w-[90%]"
            ><button
              class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400"
            >
              View Project
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4"
        >
          <img
            src="../assets/ourservices4.jpg"
            alt="services image"
            class="rounded-t-2xl w-full"
          />
          <p class="text-center font-semibold text-xl my-2 text-blue-900">
            Kilifi Microgrid
          </p>
          <router-link to="/services" class="w-[90%]"
            ><button
              class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400"
            >
              View Project
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4"
        >
          <img
            src="../assets/ourservices2.png"
            alt="services image"
            class="rounded-t-2xl w-full"
          />
          <p class="text-center font-semibold text-xl my-2 text-blue-900">
            Rural water pump
          </p>
          <router-link to="/services" class="w-[90%]"
            ><button
              class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400"
            >
              View Project
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
