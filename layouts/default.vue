<template>
  <div class="relative flex flex-col w-full h-auto bg-gray-50 dark:bg-black items-center">
    <header class="absolute w-full md:w-9/12 fixed-top mt-4 px-2 md:px-14">
      <nav class="container flex w-auto justify-between">
        <ul class="flex w-12 h-12">
          <a href="/" class="w-full h-full bg-center bg-cover bg-[url('/images/avatar.jpg')] border border-gray-200 dark:border-neutral-700 rounded-full" v-show="$route.path !== '/'">
          </a>
        </ul>
        <ul class="flex items-center justify-between text-white font-medium text-sm bg-white text-black dark:bg-neutral-800 dark:text-white border border-gray-200 dark:border-neutral-700 shadow-sm px-4 rounded-full">
          <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="about">About</NuxtLink></li>
          <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="articles">Articles</NuxtLink></li>
          <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="projects">Projects</NuxtLink></li>
          <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="speaking">Speaking</NuxtLink></li>
          <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="uses">Users</NuxtLink></li>
        </ul>

        <div class="flex items-center justify-center w-auto">
          <button class="flex w-12 h-12 items-center text-white font-medium text-md bg-white text-black dark:bg-neutral-800 dark:text-white border border-gray-200 dark:border-neutral-700 shadow-sm rounded-full" @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
            <img v-if="$colorMode.value=== 'light'" src="/images/svg/dark-mode.svg" class="w-full h-auto p-3" alt="Dark Mode">
            <img v-if="$colorMode.value=== 'dark'" src="/images/svg/light-mode.svg" class="w-full h-auto p-3" alt="Light Mode">
          </button>
        </div>
      </nav>
    </header>

    <div class="w-11/12 md:w-9/12 bg-white dark:bg-neutral-900 text-black dark:text-white justify-center">
      <div class="flex w-full mt-40 mb-20 px-1 md:px-24">
        <slot />
      </div>
    </div>
    <div class="flex w-9/12 justify-center text-black dark:text-white bg-white dark:bg-neutral-900 border-t border-gray-300 dark:border-gray-700 px-14">
      <footer class="flex w-full justify-between items-center">
          <ul class="flex text-white font-medium text-sm text-black dark:text-white py-6">
            <li class="pr-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="about">About</NuxtLink></li>
            <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="projects">Projects</NuxtLink></li>
            <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="speaking">Speaking</NuxtLink></li>
            <li class="px-2 py-1 hover:text-teal-400 duration-300"><NuxtLink to="uses">Users</NuxtLink></li>
          </ul>
          <div class="items-center text-gray-500">
            <span class="text-sm">
              © 2023 Spencer Sharp. All rights reserved.
            </span>
          </div>
      </footer>
    </div>
  </div>

</template>

<style>
.router-link-exact-active {
  color: #b2dfdb;
}
</style>

<script setup lang="ts">
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
  console.log('change theme color');
  useColorMode().preference = newTheme
}</script>

