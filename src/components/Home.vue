<template>
  <Hero />
  <section>
    <div class="mt-12 grid lg:grid-cols-2 w-[89%] lg:w-3/4 mr-auto ml-auto gap-7">
      <div class="flex flex-col justify-between">
        <h1
          class="font-serif font-semibold text-xl md:text-2xl lg:text-3xl text-blue-900 mb-5"
        >
          Transforming the Future of Energy with Solar Technology
        </h1>
        <h1 class="font-mono text-2xl mb-1 text-blue-900">About Sunrevo Solar Power</h1>
        <p class="mb-1 text-blue-900">
          SunRevo Power started as a solar lighting company driven by a mission to make
          clean and sustainable energy accessible to everyone. Over time, we have expanded
          into one of <strong>the most trusted</strong> solar providers in Mombasa and
          across Kenya—known for our affordability, technical expertise, and strong
          commitment to environmental conservation. Today, SunRevo Power focuses on
          supplying and installing high-quality, reliable, and eco-friendly solar energy
          systems. By combining modern technology with practical experience, we deliver
          solutions that lower energy costs while supporting a greener future.
        </p>
      </div>
      <div class="flex flex-col justify-between my-auto">
        <img
          alt="Solar powered home in Kenya"
          width="600"
          height="400"
          loading="lazy"
          src="/images/home1.jpg"
          class="rounded-2xl"
        />
      </div>
    </div>

    <div class="bg-gray-200 mt-8">
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-[92%] md:w-[85%] lg:w-[75%] xl:w-[60%] mx-auto py-8"
      >
        <div
          class="bg-blue-950 rounded flex flex-col items-center justify-center text-center py-4 hover:shadow-lg hover:shadow-black transition duration-300"
        >
          <img
            src="/images/customizable11.svg"
            alt="Home solar power"
            width="80"
            height="80"
            loading="lazy"
            class="w-24 h-24 object-contain rounded-full border-2 border-blue-300 p-2 mb-3"
          />
          <p class="text-orange-100 font-bold text-sm sm:text-base">Home Power</p>
        </div>

        <!-- Repeat same structure for others -->
        <div
          class="bg-blue-950 rounded flex flex-col items-center justify-center text-center py-4 hover:shadow-lg hover:shadow-black transition duration-300"
        >
          <img
            src="/images/customizable22.svg"
            alt="Home solar power"
            width="80"
            height="80"
            loading="lazy"
            class="w-24 h-24 rounded-full p-2 border-blue-300 border-2"
          />
          <p class="text-orange-100 text-center font-bold">MicroGrid Solar</p>
        </div>
        <div
          class="bg-blue-950 rounded grid items-center justify-center py-4 hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200"
        >
          <img
            src="/images/customizable33.svg"
            alt="Home solar power"
            width="80"
            height="80"
            loading="lazy"
            class="w-24 h-24 rounded-full p-2 border-blue-300 border-2"
          />
          <p class="text-orange-100 text-center font-bold">Water Pump</p>
        </div>
        <div
          class="bg-blue-950 rounded grid items-center justify-center py-4 hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200"
        >
          <img
            src="/images/customizable44.svg"
            alt="Home solar power"
            width="80"
            height="80"
            loading="lazy"
            class="w-24 h-24 rounded-full p-2 border-blue-300 border-2"
          />
          <p class="text-orange-100 text-center font-bold">Power Backup</p>
        </div>
        <div
          class="bg-blue-950 rounded grid items-center justify-center p-4 hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200"
        >
          <img
            src="/images/customizable555.svg"
            alt="Home solar power"
            width="80"
            height="80"
            loading="lazy"
            class="w-24 h-24 rounded-full p-2 border-blue-300 border-2"
          />
          <p class="text-orange-100 text-center font-bold">Lighting Solar</p>
        </div>
        <div
          class="bg-blue-950 rounded grid items-center justify-center py-4 hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200"
        >
          <img
            src="/images/customizable66.svg"
            alt="Home solar power"
            width="80"
            height="80"
            loading="lazy"
            class="w-24 h-24 border-2 rounded-full p-2 border-blue-300"
          />
          <p class="text-orange-100 text-center font-bold">Water Heater</p>
        </div>
      </div>
    </div>

    <!--Our Services-->
    <div class="bg-gray-100">
      <div class="relative">
        <img
          src="/images/home4.webp"
          alt="Solar services in Kenya"
          class="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="600"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/65"></div>

        <div
          data-aos="slide-right"
          data-aos-duration="1200"
          class="relative z-10 flex items-center justify-center min-h-[50vh]"
        >
          <h1 class="text-orange-200 text-4xl md:text-7xl font-serif">Our Services</h1>
        </div>
      </div>
      <!--Services Grid-->
      <div
        class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-auto lg:w-4/5 w-[90%] -mt-14"
      >
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3"
        >
          <img
            alt="Solar system installation"
            width="400"
            height="250"
            loading="lazy"
            src="/images/installation.webp"
            class="rounded-t-2xl w-full"
          />
          <p class="text-orange-300 font-bold text-lg font">Solar System Installation</p>
          <p class="text-white">
            Complete installation of solar panels, inverters, batteries, charge
            controllers, and other system components for homes, businesses, and
            industries.
          </p>
          <router-link to="/services"
            ><button
              class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full"
            >
              Learn More...
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3"
        >
          <img
            alt="Solar system installation"
            width="400"
            height="250"
            loading="lazy"
            src="/images/installation2.webp"
            class="rounded-t-2xl w-full"
          />
          <p class="text-orange-300 font-bold text-lg font">
            Solar System Design and Consultation
          </p>
          <p class="text-white">
            Assessing customer energy needs and designing customized solar solutions,
            including site surveys, load assessment, and professional recommendations.
          </p>
          <router-link to="/services"
            ><button
              class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full"
            >
              Learn More...
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3"
        >
          <img
            alt="Solar system installation"
            width="400"
            height="250"
            loading="lazy"
            src="/images/repair.webp"
            class="rounded-t-2xl w-full"
          />
          <p class="text-orange-300 font-bold text-lg font">
            Solar Maintenance and Repair
          </p>
          <p class="text-white">
            Routine system checkups, cleaning, troubleshooting, and repair of faulty
            panels, inverters, batteries, and wiring to ensure peak performance.
          </p>
          <router-link to="/services"
            ><button
              class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full"
            >
              Learn More...
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3"
        >
          <img
            alt="Solar system installation"
            width="400"
            height="250"
            loading="lazy"
            src="/images/energyaudit.webp"
            class="rounded-t-2xl w-full"
          />
          <p class="text-orange-300 font-bold text-lg font">
            Energy Audits and Efficiency Optimization
          </p>
          <p class="text-white">
            Evaluating energy usage and providing solutions to reduce electricity costs
            through solar integration and energy-efficient technologies.
          </p>
          <router-link to="/services"
            ><button
              class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full"
            >
              Learn More...
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3"
        >
          <img
            alt="Solar system installation"
            width="400"
            height="250"
            loading="lazy"
            src="/images/last.webp"
            class="rounded-t-2xl w-full"
          />
          <p class="text-orange-300 font-bold text-lg font">Solar Equipment Sales</p>
          <p class="text-white">
            Selling high-quality solar products such as panels, batteries, inverters,
            solar lights, charge controllers, water pumps, and solar accessories.
          </p>
          <router-link to="/services"
            ><button
              class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full"
            >
              Learn More...
            </button></router-link
          >
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3"
        >
          <img
            alt="Solar system installation"
            width="400"
            height="250"
            loading="lazy"
            src="/images/installation1.webp"
            class="rounded-t-2xl w-full"
          />
          <p class="text-orange-300 font-bold text-lg font">
            Solar Backup and Hybrid Systems
          </p>
          <p class="text-white">
            Installation of backup power solutions, hybrid systems, and solar battery
            storage for reliable power during blackouts or off-grid setups.
          </p>
          <router-link to="/services"
            ><button
              class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full"
            >
              Learn More...
            </button></router-link
          >
        </div>
      </div>
      <!--Why Choose SunRevo Power-->
      <div
        id="wrapper"
        class="flex flex-col items-center justify-center bg-white lg:w-3/5 w-[90%] mx-auto mt-7 text-blue-950 py-10 shadow shadow-blue-800"
      >
        <h1 class="font-semibold lg:text-3xl md:text-2xl text-xl">
          Why Choose SUNREVO Power?
        </h1>
        <div id="sub-wrapper" class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-4">
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            class="border-2 border-blue-800 rounded-lg p-3"
          >
            <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">
              Trusted Solar Experts
            </h2>
            <p>
              We bring years of hands-on experience to every project, ensuring reliable
              and professional solar solutions.
            </p>
          </div>
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            class="border-2 border-blue-800 rounded-lg p-3"
          >
            <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">
              Affordable, High-Quality Products
            </h2>
            <p>
              Our systems are designed to give you the best performance at a price that
              fits your budget.
            </p>
          </div>
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            class="border-2 border-blue-800 rounded-lg p-3"
          >
            <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">
              Professional Installation
            </h2>
            <p>
              Our skilled technicians install every system with precision for maximum
              efficiency and long-term durability.
            </p>
          </div>
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            class="border-2 border-blue-800 rounded-lg p-3"
          >
            <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">
              Proven Reliability
            </h2>
            <p>
              With Over 100 successful solar projects delivered nation wide, our systems
              are built to last and perform reliably in all conditions.
            </p>
          </div>
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            class="border-2 border-blue-800 rounded-lg p-3"
          >
            <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">
              Fast and Reliable Support
            </h2>
            <p>
              We provide timely assistance, maintenance, and after-sale support to keep
              your system running smoothly.
            </p>
          </div>
          <div
            data-aos="slide-right"
            data-aos-duration="600"
            class="border-2 border-blue-800 rounded-lg p-3"
          >
            <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">
              Commitment to Sustainability
            </h2>
            <p>
              Choosing us means choosing clean, renewable energy that protects the
              environment and reduces electricity costs.
            </p>
          </div>
        </div>
      </div>

      <!--Our Projects-->
      <div class="flex flex-col justify-center items-center my-10 w-full">
        <div class="bg-blue-950 lg:w-3/5 w-[90%]">
          <h1 class="text-center text-orange-400 text-3xl p-3 font-serif">
            Our Projects
          </h1>
        </div>

        <!--The projects-->
        <div
          data-aos="slide-up"
          data-aos-duration="600"
          class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-6"
        >
          <div
            class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4"
          >
            <img
              alt="Solar battery installation"
              width="360"
              height="250"
              loading="lazy"
              src="/images/sunrevoproject1.webp"
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
              alt="Solar battery installation"
              width="360"
              height="250"
              loading="lazy"
              src="/images/sunrevoproject22.webp"
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
              alt="Solar battery installation"
              width="360"
              height="250"
              loading="lazy"
              src="/images/waterheater.webp"
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
              alt="Solar battery installation"
              width="360"
              height="250"
              loading="lazy"
              src="/images/ourservices4.webp"
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
              alt="Solar battery installation"
              width="360"
              height="250"
              loading="lazy"
              src="/images/ourservices2.webp"
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
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4"
          >
            <img
              alt="Solar battery installation"
              width="360"
              height="250"
              loading="lazy"
              src="/images/ourservices3.webp"
              class="rounded-t-2xl w-full"
            />
            <p class="text-center font-semibold text-xl my-2 text-blue-900">
              12kW Solar System Mombasa
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
      <Contact />
    </div>
  </section>
</template>

<script setup>
import Contact from "./Contact.vue";
import Hero from "./Hero.vue";
</script>
