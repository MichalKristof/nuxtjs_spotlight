<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col w-7/12 items-start">
      <div class="text-4xl font-bold text-left mt-10">
        I’ve spoken at events all around the world and been interviewed for many podcasts.
      </div>

      <p class="mt-8 text-neutral-600 dark:text-gray-400 text-base font-normal leading-7 text-left">
        One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.
      </p>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div v-for="item in data" :key="item._id">
          <div v-if="item.link === 'Watch video'" class="flex flex-row w-full h-auto">
            <div class="flex w-2/5 items-start justify-start p-5">
              <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ item.nameOfSection }}
              </span>
            </div>
            <div class="flex flex-col w-3/5 items-start justify-start gap-3 p-5 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer duration-500">
              <span class="text-sm text-neutral-600 dark:text-gray-400 border-l border-gray-400 pl-3">
                {{ item.nameOfBook}}
              </span>
              <span class="text-base dark:text-white">
                {{ item.title}}
              </span>
              <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ item.content}}
              </span>
              <button class="w-auto text-teal-400 text-base">
                {{  item.link }} >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div v-for="item in data" :key="item._id">
          <div v-if="item.link === 'Listen to podcast'" class="flex flex-row w-full h-auto">
            <div class="flex w-2/5 items-start justify-start p-5">
              <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ item.nameOfSection }}
              </span>
            </div>
            <div class="flex flex-col w-3/5 items-start justify-start gap-3 p-5 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer duration-500">
              <span class="text-sm text-neutral-600 dark:text-gray-400 border-l border-gray-400 pl-3">
                {{ item.nameOfBook}}
              </span>
              <span class="text-base dark:text-white">
                {{ item.title}}
              </span>
              <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ item.content}}
              </span>
              <button class="w-auto text-teal-400 text-base">
                {{  item.link }} >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "speaking"]{nameOfSection, nameOfBook, title, content, link}`
const { data } = useSanityQuery(query)
</script>

<script >
export default {

}
</script>

<style scoped>

</style>