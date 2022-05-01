<template>
  <div class="advantages w-full h-screen pt-32 px-24 flex flex-col pb-12">
    <div
      class="
        advantages__grid
        absolute
        top-0
        left-0
        w-full
        h-full
        px-24
        grid grid-cols-3
      "
    >
      <div v-for="n in 3" :key="n" class="h-full">
        <div class="w-px h-full bg-gray-3"></div>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <p class="text-3xl text-white font-bold leading-10">
        Figures of importance
      </p>
      <div class="flex items-center">
        <p class="text-white leading-5">
          For the company's first year of operation in 2021
        </p>
      </div>
    </div>
    <div class="mt-10 grid grid-cols-3 text-xs uppercase text-white font-bold">
      <p>Quantity</p>
      <p>Quality</p>
      <p>Dynamics</p>
    </div>
    <div class="mt-4 flex-1 grid grid-cols-3 grid-rows-2 relative">
      <div
        class="
          advantages__horizontal-line
          h-px
          bg-gray-3
          absolute
          top-0
          -left-24
        "
      ></div>
      <div
        v-for="advantage in advantages"
        :key="advantage.number"
        class="flex flex-col justify-center pr-4"
      >
        <div
          class="
            flex
            justify-center
            items-center
            w-8
            h-8
            rounded-full
            bg-white
            relative
          "
        >
          <LazyImage width="12" height="12" src="index/advantages/arrow.svg" />
        </div>
        <p class="advantages__number font-semibold mb-1 text-white">
          {{ advantage.number }}
        </p>
        <p class="text-white text-xl leading-6">{{ advantage.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesList',
  data() {
    return {
      advantages: [
        {
          number: '70',
          text: 'middle and senior level developers with 3+ years of experience',
        },
        {
          number: '+150%',
          text: "Forecast for the growth of the company's staff in 2022",
        },
        {
          number: '100%',
          text: 'NPS of customers by completed projects in 2021',
        },
        {
          number: '>200',
          text: 'projects implemented by the company and team members in 2015-2021',
        },
        {
          number: '92%',
          text: 'contract sales conversion to large corporations in 2021',
        },
        {
          number: '+400%',
          text: 'Revenue Growth Forecast in 2022',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.advantages {
  &__number {
    font-size: 70px;
    line-height: 85px;
  }
  &__horizontal-line {
    width: 120%;
  }
}
</style>