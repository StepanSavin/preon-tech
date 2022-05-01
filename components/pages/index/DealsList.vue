<template>
  <div
    class="deals w-full h-screen pt-32 pl-24 pb-12 flex flex-col duration-1000"
  >
    <div class="flex flex-1 gap-8">
      <div class="flex-1 flex flex-col w-full">
        <div class="flex items-center justify-between">
          <p class="text-3xl text-white font-bold leading-10">Super Deals</p>
          <div class="flex items-center">
            <p class="text-white leading-5">
              For the company's first year of operation in 2021
            </p>
          </div>
        </div>
        <div class="w-full flex-1 mt-6 relative flex flex-col justify-end">
          <div
            class="absolute top-0 left-0 flex flex-col w-3 gap-2 items-center"
          >
            <p class="text-yellow-1 text-xl leading-6">1</p>
            <div class="w-px h-24 bg-white relative">
              <div
                :style="{ transform: `scaleY(${section / 3})` }"
                class="
                  bg-yellow-1
                  absolute
                  top-0
                  left-0
                  h-full
                  w-full
                  origin-top
                  duration-1000
                "
              ></div>
            </div>
            <p class="text-white text-xl leading-6">3</p>
          </div>
          <transition name="deals-text">
            <div :key="section" class="w-full mb-12 pr-20">
              <div class="font-semibold text-white leading-5 relative w-max">
                {{ deals[section - 1].subtext }}
                <div
                  :key="section"
                  class="
                    deals__restrict-line
                    origin-left
                    absolute
                    top-6
                    left-0
                    w-full
                    bg-yellow-1
                    h-1
                    duration-1000
                  "
                ></div>
              </div>
              <p class="mt-4 text-2xl leading-9 font-bold text-white">
                {{ deals[section - 1].title }}
              </p>
              <p class="mt-6 leading-5 font-semibold text-white">
                {{ deals[section - 1].text }}
              </p>
              <div class="mt-4">
                <div
                  v-for="dealItem in deals[section - 1].list"
                  :key="dealItem"
                  class="flex items-center pl-1 gap-2"
                >
                  <div class="w-1 h-1 rounded-60 bg-gray-4"></div>
                  <p class="text-gray-4 mb-0.5">
                    {{ dealItem }}
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <transition-group
        tag="div"
        class="deals__image-wrapper relative rounded-l-45"
        name="deals-images"
      >
        <img
          v-for="n in deals.length"
          :key="n + `${section}`"
          :src="require(`@/assets/images/index/deals/${section}.png`)"
          class="absolute w-full top-0 left-0 rounded-l-45"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealsList',
  props: {
    currentSection: {
      type: Number,
      required: true,
    },
    prevSection: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      deals: [
        {
          title: 'IT audit in a hurry',
          subtext: 'It is completely free (up to 3 days)',
          text: 'We don’t charge for audit to analyse and evaluate business needs as a first step',
          list: [
            'Code quality Optimality of the IT architecture ',
            "The technological stack's usefulness",
            'Processes for development should be as efficient as possible (Lean, Scrum, DevOps) ',
            'Performance and scalability forecasts ',
            'Assessment of risk and vulnerability ',
            'Improvements Recommendations',
          ],
        },
        {
          title: 'Current IT OPEX can be reduced by 25%',
          subtext: 'a minimum of x.2 in the case of digital marketing',
          text: 'Every sportcar aims to optimise its weight. We get rid of excess OPEX costs by reducing them to -25-40%',
          list: [
            'code quality benchmarking (database of ready-made solutions and x.2 code review)',
            'quick advancement (well-developed processes, 100 percent middle and senior level developers) ',
            'IT-architecture best practices (it-architects with international experience) ',
            'There are no additional costs (no administrative employees), a flat structure, and open source management tools.',
          ],
        },
        {
          title:
            'The output of the site in the TOP 10 of the organic output of Google',
          subtext: 'In 2 months, you will receive a guarantee.',
          text: 'We mean it when we say "top outcomes." As a project standard, we will raise your website\'s Google status to the top ranks within two months.',
          list: [
            "XTR's proprietary automatic SEO optimization techniques, which have been tested in a variety of foreign marketplaces, will be implemented: ",
            'Out-of-competition coverage of 100 percent of organic searches is an IT product of semantic core creation. ',
            'The "Performance SEO" methodology is as follows: To reach the top 10 positions, you must be 10 times faster than your competition. ',
            'Methodology of "Native Marketing in SEO"',
          ],
        },
      ],
    }
  },
  computed: {
    section() {
      if (this.$props.currentSection > 3) return 3
      return this.$props.currentSection
    },
  },
}
</script>

<style lang="scss">
.deals {
  &__image-wrapper {
    width: 400px;
  }
}

.deals-text {
  &-leave-active,
  &-enter-active {
    transition: all 0.7s;
  }
  &-leave-active {
    position: absolute;
    bottom: 0;
  }
  &-enter {
    transform: translateY(80px);
    opacity: 0;
    & .deals__restrict-line {
      transform: scaleX(0);
    }
  }
  &-leave-to {
    transform: translateY(-80px);
    opacity: 0;
  }
}

.deals-images {
  &-leave-active,
  &-enter-active {
    transition: all 700ms;
  }
  &-leave-active {
    opacity: 100% !important;
    transform: translateX(0) !important;
  }
  &-enter {
    transform: translateY(100vh);
  }
}
</style>