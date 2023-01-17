<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-col w-7/12 items-start">
      <div class="text-4xl font-bold text-left mt-10">
        Software I use, gadgets I love, and other things I recommend.
      </div>

      <p class="mt-8 text-neutral-600 dark:text-gray-400 text-base font-normal leading-7 text-left">
        I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
      </p>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div class="flex flex-row w-full h-auto">
          <div class="flex w-3/12 items-start justify-start p-5">
            <span class="text-base dark:text-white">
              Workstation
            </span>
          </div>
          <div class="flex flex-col w-9/12 items-start justify-start gap-3 p-5">
            <span class="text-lg dark:text-white text-left">
              16” MacBook Pro, M1 Max, 64GB RAM (2021)
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              Apple Pro Display XDR (Standard Glass)
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              IBM Model M SSK Industrial Keyboard
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              Apple Magic Trackpad
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              Herman Miller Aeron Chair
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div class="flex flex-row w-full h-auto">
          <div class="flex w-3/12 items-start justify-start p-5">
            <span class="text-base dark:text-white">
              Development tools
            </span>
          </div>
          <div class="flex flex-col w-9/12 items-start justify-start gap-3 p-5">
            <span class="text-lg dark:text-white text-left">
              Sublime Text 4
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              iTerm2
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              TablePlus
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div class="flex flex-row w-full h-auto">
          <div class="flex w-3/12 items-start justify-start p-5">
            <span class="text-base dark:text-white">
              Design
            </span>
          </div>
          <div class="flex flex-col w-9/12 items-start justify-start gap-3 p-5">
            <span class="text-lg dark:text-white text-left">
              Figma
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-10/12 items-start mt-10">
      <div class="w-full grid grid-cols-1 gap-3 border-l border-gray-200">
        <div class="flex flex-row w-full h-auto">
          <div class="flex w-3/12 items-start justify-start p-5">
            <span class="text-base dark:text-white">
              Productivity
            </span>
          </div>
          <div class="flex flex-col w-9/12 items-start justify-start gap-3 p-5">
            <span class="text-lg dark:text-white text-left">
              Alfred
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              Reflect
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              SavvyCal
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.
            </p>

            <span class="text-lg dark:text-white text-left mt-10">
              Focus
            </span>
            <p class="text-base dark:text-gray-400 text-justify">
              Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>