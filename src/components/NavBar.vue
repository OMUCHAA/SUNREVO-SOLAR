<template>
  <nav class="flex justify-around items-center py-6">
    <!--What is going to be visible on smaller screens-->
    <div @click="toggleMenu" class="lg:hidden">
      <i
        v-if="!isOpen"
        class="fa-solid fa-bars rounded-sm py-[6px] px-[8px] w-10 sm:text-2xl md:text-3xl text-sm text-white bg-blue-950"
      ></i>
      <i
        v-if="isOpen"
        class="fa-solid fa-xmark rounded-sm py-[6px] px-[8px] w-10 text-sm sm:text-2xl md:text-3xl text-white bg-blue-950"
      ></i>
    </div>

    <!--Show the dropdown if the menu is open-->
    <div
      v-show="isOpen"
      class="text-lg font-semibold fixed top-[128px] left-0 lg:hidden justify-center items-center z-50"
    >
      <ul class="translucent flex flex-col bg-gradient-to-r from-white/60 to-blue-200/60 backdrop-blur-md p-3 text-blue-950 items-center md:w-72 w-[350px] rounded shadow">
          <li @click="closeMenu" class="h-9 border-r-0 border-l-0 border-t-0 border-blue-900 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/" class="text-center w-full h-full inline-block">HOME</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-b-0 w-full border-blue-900 hover:bg-slate-400 hover:text-white transition">
            <router-link to="/contact" class="text-center w-full h-full inline-block">CONTACT</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-b-0 border-blue-900 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/about" class="text-center w-full h-full inline-block">ABOUT US</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-blue-900 border-b-0 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/services" class="text-center w-full h-full inline-block">SERVICES</router-link>
          </li>
          <li @click="closeMenu" class="h-9 border border-r-0 border-l-0 border-blue-900 w-full hover:bg-slate-400 hover:text-white transition">
            <router-link to="/projects" class="text-center w-full h-full inline-block">PROJECTS</router-link>
          </li>
        </ul>
    </div>

    <div id="logo" class="cursor-pointer">
      <img class="lg:h-14 md:h-10 sm:h-9 h-11" src="../assets/sunrevo.jpeg" />
    </div>
    <ul class="hidden lg:flex justify-around items-center text-blue-800">
      <router-link to="/"><li class="mr-8 cursor-pointer font-semibold">HOME</li></router-link>
      <router-link to="/contact"><li class="mr-8 cursor-pointer font-semibold">CONTACT</li></router-link>
      <router-link to="/about"><li class="mr-8 cursor-pointer font-semibold">ABOUT US</li></router-link>
      <router-link to="/services"><li class="mr-8 cursor-pointer font-semibold">SERVICES</li></router-link>
      <router-link to="/projects"><li class="mr-8 cursor-pointer font-semibold">PROJECTS</li></router-link>
    </ul>
    <router-link to="/inquire"><button
      class="border flex justify-center items-center h-10 lg:h-12 px-2 rounded bg-blue-950 font-semibold text-white hover:bg-white 
      hover:text-blue-950 transition-colors duration-500 active:bg-blue-700 active:text-white"
    >
      <i class="fa-solid fa-inbox"></i>Inquire Now
    </button></router-link>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>
