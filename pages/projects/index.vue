<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col w-7/12 items-start">
      <div class="text-4xl font-bold text-left mt-10">
        Things I’ve made trying to put my dent in the universe.
      </div>

      <p class="mt-8 text-neutral-600 dark:text-gray-400 text-base font-normal leading-7 text-left">
        I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
      <div v-for="project in data" class="flex flex-col w-full justify-center items-start h-auto p-3 gap-3 cursor-pointer group hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-2xl duration-500">
        <div class="my-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          icon
        </div>
        <span class="text-base dark:text-white">
                {{ project.title}}
              </span>
        <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ project.text}}
              </span>
        <button class="flex flex-row w-auto dark:text-white text-base group-hover:text-teal-400 duration-500">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
          {{ project.link }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "project"] | order(text asc)`
const { data, refresh } = useSanityQuery(query)
</script>

<script>
export default {

}
</script>

<style scoped>

</style>