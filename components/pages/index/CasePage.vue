<template>
  <div
    class="w-full h-screen pt-24 pb-14 pr-6 pl-24 transition-all duration-1000"
    :class="`bg-case-${section}`"
  >
    <div class="w-full flex gap-4 justify-between">
      <div class="caselist__text-block flex flex-col justify-between relative">
        <div class="relative z-5">
          <p class="font-bold text-white text-3xl leading-10">Selected Works</p>
          <transition name="linkappear">
            <a :key="section" class="flex gap-2 items-center mt-4">
              <div
                class="
                  h-5
                  w-5
                  rounded-full
                  flex
                  justify-center
                  items-center
                  transition-all
                  duration-1000
                "
                :class="`bg-case-text-${section}`"
              >
                <LazyImage
                  width="8"
                  height="8"
                  src="index/cases/arrow-icon.svg"
                />
              </div>
              <p
                class="text-xl leading-6 transition-all duration-1000"
                :class="`text-case-text-${section}`"
              >
                {{ cases[section - 1].link }}
              </p>
            </a>
          </transition>
          <div
            class="flex items-center gap-2 mt-4 transition-all duration-1000"
          >
            <p
              class="text-xl leading-6 transition-all duration-1000"
              :class="`text-case-text-${section}`"
            >
              {{ section }}
            </p>
            <div class="w-32 h-px bg-white relative">
              <div
                :style="{ transform: `scaleX(${section / 7})` }"
                class="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-full
                  origin-left
                  transition-all
                  duration-1000
                "
                :class="`bg-case-text-${section}`"
              ></div>
            </div>
            <p class="text-xl leading-6 text-white">{{ cases.length }}</p>
          </div>
          <transition name="linkappear">
            <div
              :key="section"
              class="flex flex-wrap gap-2 mt-4 caselist__taggroup"
            >
              <div
                v-for="tag in cases[section - 1].tags"
                :key="tag + section"
                class="
                  caselist__tag
                  rounded-60
                  py-1.5
                  px-3
                  text-sm
                  font-bold
                  leading-4
                  bg-white
                  transition-all
                  duration-1000
                "
                :class="`text-case-${section}`"
              >
                {{ tag }}
              </div>
            </div>
          </transition>
        </div>
        <transition name="text">
          <div :key="section">
            <p class="text-white leading-5 font-medium">
              <span class="font-bold">
                {{ cases[section - 1].advantage.title }}
              </span>
              {{ cases[section - 1].advantage.text }}
            </p>
            <p class="mt-8 text-sm leading-4 text-white font-medium">
              <span class="font-bold">Stack:</span>
              {{ cases[section - 1].stack }}
            </p>
            <p class="mt-2 text-sm text-white leading-4 font-medium relative">
              <span class="font-bold">Task: </span>
              {{ cases[section - 1].task }}
            </p>

            <p class="mt-8 font-medium text-white leading-5 pb-2">
              {{ cases[section - 1].present }}
            </p>
          </div>
        </transition>
        <div class="caselist__title-block absolute left-0 font-medium z-5">
          <transition name="title">
            <p :key="section" class="text-white text-7xl">
              {{ cases[section - 1].title }}<br />
            </p>
          </transition>
          <transition name="subtitle">
            <p
              :key="section"
              class="caselist__subtitle transition-all duration-1000"
              :class="`text-case-text-${section}`"
            >
              {{ cases[section - 1].subtitle }}
            </p>
          </transition>
        </div>
      </div>
      <transition-group
        tag="div"
        class="relative caselist__image-wrapper"
        :name="currentSection > prevSection ? 'bgappear' : 'bgappearreverse'"
      >
        <img
          v-for="n in cases.length"
          :key="n + `${section}`"
          :src="require(`@/assets/images/index/cases/${n}.png`)"
          class="rounded-60 caselist__main-image w-full top-0 left-0"
          :class="{ 'absolute opacity-min': n !== section }"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CasePage',
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
      tags: ['App & Web', 'CRM, ERP, MDM, BPMS', 'Machine Learning'],
      cases: [
        {
          title: 'Alibaba.com',
          subtitle: 'CRM development',
          link: 'Alibaba.com',
          tags: ['App & Web', 'CRM, ERP, MDM, BPMS', 'Machine Learning'],
          advantage: {
            title: 'Super-fast:',
            text: 'the initial version was launched in less than two months',
          },
          stack: 'C++, Python',
          task: 'Develop a CRM for customer experience, incorporating an omni-channel platform and a golden record system, as well as an omni-channel platform and a golden record system.',
          present: '2021→present',
        },
        {
          title: 'Blockchain.com',
          subtitle: 'Application for mobile',
          link: 'Blockchain.com',
          tags: ['Blockchain', 'DeFi'],
          advantage: {
            title: 'KPI:',
            text: 'The one-week release cycle has been reached',
          },
          stack: 'Python, Tezos, NEAR protocol, C-Chain (Avalanche)',
          task: 'introduce recommendation systems and currency arbitrage, as well as the growth of the investor community',
          present: '2021→present',
        },
        {
          title: 'Deutsche Bank',
          subtitle: 'System optimization',
          link: 'deutschebank.com',
          tags: ['BPMS', 'Strategic consulting'],
          advantage: {
            title: 'KPI:',
            text: '(1) Release cycle is 45 percent faster (2) +19 percent increase in NPS (Central Europe)',
          },
          stack: 'C++, Python',
          task: "(1) At the level of the bank's central office, audit and implement targeted IT development processes. (2) Create a business process management system (bpms) to manage customer experience procedures.",
          present: '2021→present',
        },
        {
          title: 'Talanty.online',
          subtitle: 'HR Portal',
          link: 'talanty.online',
          tags: ['BPMS', 'Strategic consulting'],
          advantage: {
            title: 'KPI:',
            text: '(1) Release cycle is 45 percent faster (2) +19 percent increase in NPS (Central Europe)',
          },
          stack: 'C++, Python',
          task: "(1) At the level of the bank's central office, audit and implement targeted IT development processes. (2) Create a business process management system (bpms) to manage customer experience procedures.",
          present: '2021→present',
        },
        {
          title: 'PepsiCo',
          subtitle: 'Developing a meta-universe',
          link: 'pepsico.com',
          tags: ['NFT', 'CRM'],
          advantage: {
            title: 'KPI:',
            text: 'Design and development in 2 months',
          },
          stack: 'Python, С++',
          task: 'Develop a character meta-universe with generative NFT to volley customers in offline retail',
          present: '2022→present',
        },
        {
          title: 'Auchan',
          subtitle: 'Targeted marketing models',
          link: 'auchan.com',
          tags: ['CX', 'Target marketing', 'Machine Learning'],
          advantage: {
            title: 'KPI:',
            text: 'EBITDA growth of loyalty program participants from +5%',
          },
          stack: 'Python, DML',
          task: 'Develop a training system of target marketing models for user LTV growth',
          present: '2019-2020',
        },
        {
          title: 'Nestlé',
          subtitle: 'Mobile app for testing',
          link: 'nestle.com',
          tags: ['CX', 'app'],
          advantage: {
            title: 'KPI:',
            text: 'Conversion to app usage 34%',
          },
          stack: 'PHP, Python',
          task: 'Develop a mobile app and mechanics for engaging loyal customers in testing new products and generating reviews on social networks and mapping services',
          present: '2021',
        },
      ],
    }
  },
  computed: {
    section() {
      if (this.$props.currentSection <= 2) return 1
      else if (this.$props.currentSection > 7) return 7
      return this.$props.currentSection - 1
    },
  },
}
</script>

<style lang="scss">
.caselist {
  &__text-block {
    max-width: 309px;
  }
  &__title-block {
    top: 273px;
    line-height: 70px;
    max-width: unset;
    width: 2000px;
    height: 140px;
  }

  &__subtitle {
    font-size: 70px;
  }

  &__taggroup {
    max-width: 309px;
  }

  &__image-wrapper {
    width: 998px;
    height: 702px;
  }
}

.bgappear {
  &-leave-active,
  &-enter-active {
    transition: all 1.5s !important;
  }
  &-enter {
    transform: translateX(1200px) !important;
  }
  &-leave-to {
    transform: translateX(-2000px) !important;
  }
  &-enter,
  &-enter-active,
  &-leave,
  &-leave-active {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }
}

.bgappearreverse {
  &-leave-active,
  &-enter-active {
    transition: all 1.5s !important;
  }
  &-enter {
    transform: translateX(-2000px) !important;
  }
  &-leave-to {
    transform: translateX(1200px) !important;
  }
  &-enter,
  &-enter-active,
  &-leave,
  &-leave-active {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }
}

.linkappear {
  &-leave-active,
  &-enter-active {
    transition: all 1000ms !important;
  }
  &-enter {
    opacity: 0;
    transform: translateX(100px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  &-leave,
  &-leave-active {
    position: absolute;
  }
  &-enter-active {
    transition-delay: 500ms !important;
  }
}

.title,
.subtitle {
  &-leave-active,
  &-enter-active {
    transition: all 700ms;
  }
  &-enter-active {
    position: absolute;
    left: 0;
    transition-delay: 700ms;
  }
  &-leave-to {
    transform: translateX(-1200px);
  }
  &-enter {
    transform: translateX(2000px);
  }
}
.title-enter-active {
  top: 0;
}
.subtitle {
  &-enter-active {
    bottom: 0;
  }
  &-leave-active {
    transition-delay: 100ms;
  }
}

.text {
  &-enter-active,
  &-leave-active {
    transition: opacity 440ms;
  }
  &-leave-active {
    opacity: 1 !important;
  }
  &-enter-active {
    opacity: 0 !important;
    position: absolute;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>