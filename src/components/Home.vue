<template>
    <Hero/>
    <section>
    <div class="mt-12 grid lg:grid-cols-2 w-[89%] lg:w-3/4 mr-auto ml-auto gap-7">
        <div class="flex flex-col justify-between ">
            <h1 class="font-serif font-semibold text-xl md:text-2xl lg:text-3xl text-blue-900 mb-5">Transforming the Future of Energy with Solar Technology</h1>
            <h1 class="font-mono text-2xl mb-1 text-blue-900">About Sunrevo Solar Power</h1>
            <p class="mb-1 text-blue-900">About SunRevo Power
SunRevo Power started as a solar lighting company driven by a mission to make clean and sustainable energy accessible to everyone. Over time, we have expanded into one of <strong>the most trusted</strong> solar providers in Mombasa and across Kenya—known for our affordability, technical expertise, and strong commitment to environmental conservation.

Today, SunRevo Power focuses on supplying and installing high-quality, reliable, and eco-friendly solar energy systems. By combining modern technology with practical experience, we deliver solutions that lower energy costs while supporting a greener future.</p>
        </div>
    <div class="flex flex-col justify-between my-auto">
        <img src="../assets/home1.jpg" alt="Homestead-Power" class="rounded-2xl">
    </div>
    </div>

    <div class="bg-gray-200 mt-8">
        <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-10 justify-around items-center lg:w-[60%] md:w-[75%] w-[92%] mx-auto py-8">
        <div class="bg-blue-950 rounded grid items-center justify-center hover:shadow-black hover:shadow-lg  cursor-pointer transition duration-200">
            <img src="../assets/customizable11.svg" alt="customizable1" class="h-3/4 rounded-full p-2 border-blue-300 mx-4 border-2">
            <p class="text-blue-300 text-center font-bold">Home Power</p>
        </div>
        <div class="bg-blue-950 rounded grid items-center justify-center hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200">
            <img src="../assets/customizable22.svg" alt="customizable2" class="h-3/4 rounded-full p-2 border-blue-300 border-2">
            <p class="text-blue-300 text-center font-bold">Grid Solar</p>
        </div>
        <div class="bg-blue-950 rounded grid items-center justify-center hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200">
            <img src="../assets/customizable33.svg" alt="customizable3" class="h-3/4 rounded-full p-2 border-blue-300 border-2">
            <p class="text-blue-300 text-center font-bold">Water Pump</p>
        </div>
        <div class="bg-blue-950 rounded grid items-center justify-center hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200">
            <img src="../assets/customizable44.svg" alt="customizable4" class="h-3/4 rounded-full p-2 border-blue-300 border-2">
            <p class="text-blue-300 text-center font-bold">Power Backup</p>
        </div>
        <div class="bg-blue-950 rounded grid items-center justify-center hover:shadow-black hover:shadow-lg cursor-pointer transition duration-200">
            <img src="../assets/customizable555.svg" alt="customizable5" class="h-3/4 rounded-full p-2 border-blue-300 border-2">
            <p class="text-blue-300 text-center font-bold">Lighting Solar</p>
        </div>
        <div class="bg-blue-950 rounded grid items-center justify-center hover:shadow-black   hover:shadow-lg cursor-pointer transition duration-200">
            <img src="../assets/customizable66.svg" alt="customizable6" class="h-3/4 border-2 rounded-full p-2 border-blue-300">
            <p class="text-blue-300 text-center font-bold">Water Heater</p>
        </div>
        </div>
    </div>

    <!--Our Services-->
    <div class="bg-gray-100">
     <div class="relative bg-cover bg-center" :style="{ backgroundImage: `url(${ServicesBanner})` }">
        <div class="absolute inset-0 bg-black/65"></div>
        <div class="relative z-10 flex flex-col items-center justify-center min-h-[50vh]">
            <h1 class="text-blue-200 font-normal text-center text-4xl sm:text-5xl md:text-7xl font-serif">
                Our Services
            </h1>
        </div>
    </div>
    <!--Services Grid--> 
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-auto lg:w-4/5 w-[90%] -mt-14">
        <div class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3">
            <img src="../assets/installation.jpg" alt="" class="rounded-t-2xl">
            <p class="text-blue-300 font-bold text-lg font">Solar System Installation</p>
            <p class="text-white">Complete installation of solar panels, inverters, batteries, charge controllers, and other system components for homes, businesses, and industries.</p>
            <router-link to="/services"><button class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full">Learn More...</button></router-link>
        </div>
        <div class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3">
            <img src="../assets/installation2.jpg" alt="" class="rounded-t-2xl">
            <p class="text-blue-300 font-bold text-lg font">Solar System Design and Consultation</p>
            <p class="text-white">Assessing customer energy needs and designing customized solar solutions, including site surveys, load assessment, and professional recommendations.</p>
            <router-link to="/services"><button class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full">Learn More...</button></router-link>
        </div>
        <div class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3">
            <img src="../assets/repair.jpg" alt="" class="rounded-t-2xl">
            <p class="text-blue-300 font-bold text-lg font">Solar Maintenance and Repair</p>
            <p class="text-white">Routine system checkups, cleaning, troubleshooting, and repair of faulty panels, inverters, batteries, and wiring to ensure peak performance.</p>
            <router-link to="/services"><button class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full">Learn More...</button></router-link>
        </div>
        <div class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3">
            <img src="../assets/energyaudit.jpg" alt="" class="rounded-t-2xl">
            <p class="text-blue-300 font-bold text-lg font">Energy Audits and Efficiency Optimization</p>
            <p class="text-white">Evaluating energy usage and providing solutions to reduce electricity costs through solar integration and energy-efficient technologies.</p>
            <router-link to="/services"><button class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full">Learn More...</button></router-link>
        </div>
        <div class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3">
            <img src="../assets/last.jpg" alt="" class="rounded-t-2xl">
            <p class="text-blue-300 font-bold text-lg font">Solar Equipment Sales</p>
            <p class="text-white">Selling high-quality solar products such as panels, batteries, inverters, solar lights, charge controllers, water pumps, and solar accessories.</p>
           <router-link to="/services"><button class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full">Learn More...</button></router-link>
        </div>
        <div class="flex flex-col justify-between bg-blue-950 z-30 rounded-2xl text-center p-3">
            <img src="../assets/installation1.jpg" alt="" class="rounded-t-2xl">
            <p class="text-blue-300 font-bold text-lg font">Solar Backup and Hybrid Systems</p>
            <p class="text-white">Installation of backup power solutions, hybrid systems, and solar battery storage for reliable power during blackouts or off-grid setups.</p>
            <router-link to="/services"><button class="bg-blue-300 rounded-sm py-1 mt-3 hover:bg-blue-900 hover:text-blue-300 transition duration-300 font-bold w-full">Learn More...</button></router-link>
        </div>
    </div>

    <!--Why Choose SunRevo Power-->
    <div id="wrapper" class="flex flex-col items-center justify-center bg-white lg:w-3/5 w-[90%] mx-auto mt-7 text-blue-950 py-10 shadow shadow-blue-800">
    <h1 class="font-semibold lg:text-3xl md:text-2xl text-xl">Why Choose SUNREVO Power?</h1>
        <div id="sub-wrapper" class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-4">
            <div class="border-2 border-blue-800 rounded-lg p-3">
                <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">Trusted Solar Experts</h2>
                <p>We bring years of hands-on experience to every project, ensuring reliable and professional solar solutions.</p>
            </div>
            <div class="border-2 border-blue-800 rounded-lg p-3">
                <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">Affordable, High-Quality Products</h2>
                <p>Our systems are designed to give you the best performance at a price that fits your budget.</p>
            </div>
            <div class="border-2 border-blue-800 rounded-lg p-3">
                <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">Professional Installation</h2>
                <p>Our skilled technicians install every system with precision for maximum efficiency and long-term durability.</p>
            </div>
            <div class="border-2 border-blue-800 rounded-lg p-3">
                <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">Proven Reliability</h2>
                <p>With Over 100 successful solar projects delivered nation wide,
                our systems are built to last and perform reliably in all conditions.</p>
            </div>
            <div class="border-2 border-blue-800 rounded-lg p-3">
                <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">Fast and Reliable Support</h2>
                <p>We provide timely assistance, maintenance, and after-sale support to keep your system running smoothly.</p>
            </div>
            <div class="border-2 border-blue-800 rounded-lg p-3">
                <h2 class="lg:text-2xl text-blue-800 text-xl hover:text-blue-400">Commitment to Sustainability</h2>
                <p>Choosing us means choosing clean, renewable energy that protects the environment and reduces electricity costs.</p>
            </div>
        </div>
    </div>

     <!--Our Projects-->
    <div class="flex flex-col justify-center items-center my-10 w-full">
       <div class="bg-blue-950 lg:w-3/5 w-[90%]">
          <h1 class="text-center text-blue-400 text-3xl p-3 font-serif">Our Projects</h1>
       </div>

    <!--The projects-->
       <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-6">
        <div class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4">
            <img src="../assets/ourservices4.jpg" alt="services image" class="rounded-t-2xl w-full">
            <p class="text-center font-semibold text-xl my-2 text-blue-900">12kW Solar System Mombasa</p>
            <router-link to="/services" class="w-[90%]"><button class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400">View Project</button></router-link>
        </div>
        <div class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4">
            <img src="../assets/ourservices2.png" alt="services image" class="rounded-t-2xl w-full">
            <p class="text-center font-semibold text-xl my-2 text-blue-900">12kW Solar System Mombasa</p>
            <router-link to="/services" class="w-[90%]"><button class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400">View Project</button></router-link>
        </div>
        <div class="rounded-t-2xl lg:w-[360px] w-full flex flex-col bg-white shadow-lg items-center pb-4">
            <img src="../assets/ourservices3.png" alt="services image" class="rounded-t-2xl w-full">
            <p class="text-center font-semibold text-xl my-2 text-blue-900">12kW Solar System Mombasa</p>
            <router-link to="/services" class="w-[90%]"><button class="bg-blue-400 w-full py-1 rounded-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-blue-400 transition duration-300 active:bg-blue-400">View Project</button></router-link>
        </div>
       </div>
    </div>

    </div>
    </section>
</template>

<script setup>
import ServicesBanner from "../assets/home4.png";
import Hero from "./Hero.vue";
</script>