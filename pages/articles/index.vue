<template>
  <div v-for="article in articles" :key="article._id">
    {{ article.title}}
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity"
export default {
  async asyncData({$sanity}) {
    const query = groq`*[type == "article"]`
    const articles = await $sanity.fetch(query)

    return { articles }
  }
};
</script>

<style scoped>

</style>
