<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col w-7/12 items-start">
      <button @click="$router.go(-1)" class="rounded-full p-5 bg-neutral-600">
        back
      </button>
      <div class="text-4xl font-bold text-left mt-10">
        Thanks for subscribing.
      </div>

      <p class="mt-8 text-neutral-600 dark:text-gray-400 text-base font-normal leading-7 text-left">
        I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings.
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>