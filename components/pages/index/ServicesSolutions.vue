<template>
  <div
    class="
      solutions
      w-full
      h-screen
      pt-32
      px-24
      flex flex-col
      justify-between
      gap-6
    "
  >
    <div class="flex items-center">
      <p class="text-3xl text-white font-bold leading-10">Services</p>
      <p class="text-white leading-5 solutions__subtext">
        Proven experience in using advanced development<br />
        technologies and artificial intelligence models
      </p>
    </div>
    <div class="mt-6 solutions__images-wrapper flex flex-1">
      <div
        v-for="(solution, index) in solutions"
        :key="solution.title"
        class="
          overflow-hidden
          relative
          flex-1
          pt-8
          pb-10
          px-4
          flex flex-col
          justify-between
        "
      >
        <LazyImage
          width="417"
          height="883"
          :src="`index/solutions/${index + 1}.png`"
          class="object-fit absolute top-0 left-0 w-full"
        />
        <p class="text-white text-4xl leading-15 font-medium relative">
          {{ '0' + (index + 1) }}
        </p>
        <div class="z-5 solutions__text-block">
          <p class="font-medium text-4xl text-white leading-15">
            {{ solution.title }}
          </p>
          <div class="mt-4">
            <p
              v-for="item in solution.list"
              :key="item"
              class="mt-2 text-white leading-6 text-xl"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesSolutions',
  data() {
    return {
      solutions: [
        {
          title: 'Strategy and design',
          list: [
            'Strategy',
            'Corporate identity design',
            'Creative Web Design',
            'Graphic Design & CGI',
            'Content Development',
            'Creative Interface',
          ],
        },
        {
          title: 'IT product development',
          list: [
            'Product Strategy',
            'UX and UI design',
            'Frontend development',
            'Backend development',
            'Quality assurance',
            'Help Desk',
          ],
        },
        {
          title: 'Performance marketing',
          list: [
            'Analytics',
            'Display advertising',
            'Targeted advertising',
            'Media advertising',
            'SEO',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.solutions {
  &__subtext {
    margin-left: 288px;
  }
  &__images-wrapper {
    max-height: 883px;
  }
  &__text-block {
    min-height: 322px;
  }
}
</style>