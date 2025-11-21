<template>
    <footer class="relative bg-blue-950 backdrop-blur-md text-white pt-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      <!-- Company Info -->
      <div>
        <h2 class="text-2xl font-bold mb-3 text-blue-300">SUNREVO SOLAR POWER COMPANY</h2>
        <div class="flex md:justify-start justify-center mb-4">
            <img src="../assets/sunrevo.jpeg" alt="Company-Logo" class="h-12">
        </div>
        <p class="text-blue-300">
          SunRevo Power provides affordable, reliable, and eco-friendly solar energy solutions for homes and businesses across Kenya.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-blue-300">Quick Links</h3>
        <ul class="space-y-2 text-blue-300">
          <li><router-link to="/" class="hover:text-white transition">Home</router-link></li>
          <li><router-link to="/contact" class="hover:text-white transition">Contact</router-link></li>
          <li><router-link to="/about" class="hover:text-white transition">About</router-link></li>
          <li><router-link to="/services" class="hover:text-white transition">Services</router-link></li>
          <li><router-link to="/projects" class="hover:text-white transition">Projects</router-link></li>
        </ul>
         <a href="https://freepik.com" target="_blank">Image By FreePick</a>
      </div>
            
      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-bold mb-3 text-blue-300">Get in Touch</h3>
        <p class="text-blue-500"> MSA Rd, Kenya</p>
        <p class="text-blue-500">+254 780818238</p>
        <p class="text-blue-500">info@sunrevo.com</p>
      </div>
    </div>
    <div class="border-t border-white/20 py-4 mt-4 text-center text-blue-200 text-base bg-blue-950">
      © {{ new Date().getFullYear() }} SunRevo Power. All rights reserved.
    </div>
  </footer>
</template>

<script setup>

</script>