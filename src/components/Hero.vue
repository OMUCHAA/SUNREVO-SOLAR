<template>
    <div class="relative bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
            <h1 data-aos="zoom-in" data-aos-duration="1000" class="text-orange-100 font-semibold text-center text-4xl sm:text-5xl md:text-7xl font-serif">
                Advanced Solar Power Solutions
            </h1>
            <p data-aos="zoom-in" data-aos-duration="2000" class="font-mono text-white text-center py-10 text-sm sm:text-xl md:text-2xl">SunRevo is the brand that brightens your world!</p>
            <router-link to="/services"><button data-aos="zoom-in" data-aos-duration="2500" class="text-white border-orange-100 border-[3px] font-semibold py-3 rounded px-4 hover:border-blue-200 hover:bg-blue-300 hover:text-black transition duration-500">Explore Projects</button></router-link>
        </div>
    </div>
</template>

<script setup>
import heroImage from '../assets/hero2.jpg';
</script>