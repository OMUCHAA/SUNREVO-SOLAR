<template>
  <nav class="flex justify-around items-center py-6 sticky top-0 z-50 bg-gradient-to-r from-white/20 to-blue-200/10 backdrop-blur-md">
    <!--What is going to be visible on smaller screens-->
    <div @click="toggleMenu" class="lg:hidden z-50">
      <i
        v-if="!isOpen"
        class="fa-solid fa-bars rounded-sm py-[6px] px-[8px] w-10 sm:text-2xl md:text-3xl text-sm text-white bg-blue-950"
      ></i>
      <i
        v-if="isOpen"
        class="fa-solid fa-xmark rounded-sm py-[6px] px-[8px] w-10 text-sm sm:text-2xl md:text-3xl
         text-white bg-blue-800 fixed -mt-4 -ml-2"
      ></i>
    </div>

    <!--Show the dropdown if the menu is open-->
    <transition
    enter-active-class="transition duration-400 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-blue-950/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center lg:hidden min-h-[70vh]"
  >
    <ul class="space-y-6 text-2xl font-semibold text-blue-100 text-center">
      <li @click="closeMenu">
        <router-link to="/">HOME</router-link>
      </li>

      <li @click="closeMenu">
        <router-link to="/contact">CONTACT</router-link>
      </li>

      <li @click="closeMenu">
        <router-link to="/about">ABOUT US</router-link>
      </li>

      <li @click="closeMenu">
        <router-link to="/services">SERVICES</router-link>
      </li>

      <li @click="closeMenu">
        <router-link to="/projects">PROJECTS</router-link>
      </li>
    </ul>
  </div>
</transition>


    <div id="logo" class="cursor-pointer">
      <img class="lg:h-14 md:h-10 sm:h-8 h-9" src="../assets/sunrevo.jpeg" />
    </div>
    <ul class="hidden lg:flex justify-around items-center text-blue-800">
      <router-link to="/"><li class="mr-8 cursor-pointer font-semibold">HOME</li></router-link>
      <router-link to="/contact"><li class="mr-8 cursor-pointer font-semibold">CONTACT</li></router-link>
      <router-link to="/about"><li class="mr-8 cursor-pointer font-semibold">ABOUT US</li></router-link>
      <router-link to="/services"><li class="mr-8 cursor-pointer font-semibold">SERVICES</li></router-link>
      <router-link to="/projects"><li class="mr-8 cursor-pointer font-semibold">PROJECTS</li></router-link>
    </ul>
    <router-link to="/inquire"><button
      class="border flex justify-center items-center h-8 lg:h-12 px-2 rounded bg-blue-950 font-semibold text-white hover:bg-white 
      hover:text-blue-950 transition-colors duration-500 active:bg-blue-700 active:text-white"
    >
      <i class="fa-solid fa-inbox py-3"></i>Inquire Now
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
