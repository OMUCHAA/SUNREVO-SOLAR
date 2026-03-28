<template>
  <nav
    class="flex justify-around items-center sticky py-2 top-0 z-50 bg-gradient-to-r from-white/80 to-blue-200/10 backdrop-blur-md"
  >
    <!-- Mobile Menu Button -->
    <div @click="toggleMenu" class="lg:hidden z-50">
      <button aria-label="Toggle Menu">
        <i
          v-if="!isOpen"
          class="fa-solid fa-bars rounded-sm p-2 w-10 text-sm sm:text-2xl md:text-3xl text-orange-100 bg-blue-900"
        ></i>
        <i
          v-else
          class="fa-solid fa-xmark rounded-sm p-2 w-10 text-sm sm:text-2xl md:text-3xl text-orange-100 bg-blue-800 fixed -mt-4 -ml-2"
        ></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-blue-950/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center lg:hidden min-h-[70vh]"
      >
        <ul class="space-y-6 text-2xl font-semibold text-orange-100 text-center">
          <li><router-link @click="closeMenu" to="/">HOME</router-link></li>
          <li><router-link @click="closeMenu" to="/contact">CONTACT</router-link></li>
          <li><router-link @click="closeMenu" to="/about">ABOUT US</router-link></li>
          <li><router-link @click="closeMenu" to="/services">SERVICES</router-link></li>
          <li><router-link @click="closeMenu" to="/projects">PROJECTS</router-link></li>
        </ul>
      </div>
    </transition>

    <!-- Logo -->
    <div id="logo" class="cursor-pointer">
      <img
        src="/images/LogoSunrevo1.webp"
        alt="Sunrevo Solar Kenya Logo"
        width="120"
        height="60"
        class="lg:h-24 md:h-16 sm:h-20 h-14 w-full"
      />
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden lg:flex justify-around items-center text-orange-500 font-bold">
      <li class="mr-5"><router-link to="/">HOME</router-link></li>
      <li class="mr-5"><router-link to="/contact">CONTACT</router-link></li>
      <li class="mr-5"><router-link to="/about">ABOUT US</router-link></li>
      <li class="mr-5"><router-link to="/services">SERVICES</router-link></li>
      <li><router-link to="/projects">PROJECTS</router-link></li>
    </ul>

    <!-- CTA Button -->
    <router-link to="/inquire">
      <button
        class="border flex justify-center items-center h-12 px-2 rounded bg-blue-900 font-semibold text-orange-100 hover:bg-white hover:text-blue-950 transition-colors duration-500 active:bg-blue-700 active:text-white"
      >
        <i class="fa-solid fa-inbox mr-2"></i>
        Inquire Now
      </button>
    </router-link>
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
