<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col w-7/12 items-start">
      <div class="text-4xl font-bold text-left mt-10">
        Writing on software design, company building, and the aerospace industry.
      </div>

      <p class="mt-8 text-neutral-600 dark:text-gray-400 text-base font-normal leading-7 text-left">
        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
      </p>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div v-for="article in data" :key="article._id">
          <div class="flex flex-row w-full h-auto">
            <div class="flex w-2/5 items-start justify-start p-5">
              <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ formatData(article.date) }}
              </span>
            </div>
            <div class="flex flex-col w-3/5 items-start justify-start gap-3 p-5 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-800 cursor-pointer duration-500">
              <span class="text-base dark:text-white">
                {{ article.title}}
              </span>
              <span class="text-base text-neutral-600 dark:text-gray-400">
                {{ article.content}}
              </span>
              <button class="w-auto text-teal-400 text-base">
                Read article >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "article"] | order(date desc)`
const { data, refresh } = useSanityQuery(query)
</script>

<script>
export default {
  methods: {
    formatData(time) {
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = new Date(time)
      return date.toLocaleString("en-US", options)
    }
  }
}
</script>

<style scoped>

</style>
