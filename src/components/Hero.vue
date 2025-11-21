<template>
    <div class="relative bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="absolute inset-0 bg-black/30"></div>
        <div data-aos="slide-right" data-aos-duration="1200" class="relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
            <h1 data-aos="slide-right" data-aos-duration="1200" class="text-blue-100 font-normal text-center text-4xl sm:text-5xl md:text-7xl font-serif">
                Advanced Solar Power Solutions
            </h1>
            <p class="font-mono text-white text-center py-10 text-sm sm:text-xl md:text-2xl">Discover reliable hybrid solar systems designed for homes.</p>
            <router-link to="/services"><button class="text-white border-white border-[3px] font-semibold py-3 rounded px-4 hover:border-blue-200 hover:bg-blue-300 hover:text-black transition duration-500">Explore Projects</button></router-link>
        </div>
    </div>
</template>

<script setup>
import heroImage from '../assets/hero2.jpg';
</script>