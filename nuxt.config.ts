// https://nuxt.com/docs/api/configuration/nuxt-config\\
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/sanity',
    ],
    runtimeConfig: {
        sanity: {
            token: process.env.NUXT_SANITY_TOKEN,
        },
    },
    sanity: {
        projectId: 'whvysxzu',
    },

    colorMode: {
        classSuffix: '',
    },

    tailwindcss: {
        cssPath: '~/assets/css/tailwindcss.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    }
})
