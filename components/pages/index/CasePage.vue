<template>
  <transition name="caselist">
    <div v-show="isVisible" class="w-full h-screen absolute top-0 left-0">
      <div
        ref="mainContainer"
        class="
          w-full
          h-full
          md:block
          sm:block
          flex
          items-end
          pt-32
          pb-14
          pl-24
          pr-6
          xl:pr-8
          text-white
          md:px-16 md:pt-28 md:pb-14
          sm:px-8 sm:pt-28 sm:pb-12
        "
      >
        <div class="h-full w-full flex gap-4 md:hidden sm:hidden">
          <div class="caselist__info-block flex flex-col justify-between">
            <div class="w-full">
              <p class="text-3xl leading-10 font-bold">Selected Works</p>
              <a :key="currentSlide" class="flex gap-2 items-center mt-4">
                <div
                  class="h-5 w-5 rounded-full flex justify-center items-center transition-all duration-1000"
                  :class="`bg-case-text-${currentSlide}`"
                >
                  <LazyImage width="8" height="8" src="index/cases/arrow-icon.svg" />
                </div>
                <p class="text-xl leading-6 transition-all duration-1000" :class="`text-case-text-${currentSlide}`">
                  {{ cases[currentSlide - 1].link }}
                </p>
              </a>
              <div class="flex items-center gap-2 mt-4 transition-all duration-1000">
                <p class="text-xl leading-6 transition-all duration-1000" :class="`text-case-text-${currentSlide}`">
                  {{ currentSlide }}
                </p>
                <div class="w-32 h-px bg-white relative">
                  <div
                    :style="{
                      transform: `scaleX(${currentSlide / cases.length})`,
                    }"
                    class="absolute top-0 left-0 w-full h-full origin-left transition-all duration-1000"
                    :class="`bg-case-text-${currentSlide}`"
                  ></div>
                </div>
                <p class="text-xl leading-6 text-white">{{ cases.length }}</p>
              </div>
              <div class="flex flex-wrap gap-2 mt-4 xl:mt-6 caselist__taggroup">
                <div
                  v-for="tag in cases[currentSlide - 1].tags"
                  :key="tag + currentSlide"
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
                  :class="`text-case-${currentSlide}`"
                >
                  {{ tag }}
                </div>
              </div>
            </div>
            <div class="w-full">
              <p class="font-medium caselist__title relative z-2">{{ cases[currentSlide - 1].title }}</p>
              <p
                class="font-medium caselist__subtitle transition-all duration-1000 relative z-2"
                :class="`text-case-text-${currentSlide}`"
              >
                {{ cases[currentSlide - 1].subtitle }}
              </p>
              <p class="text-white leading-5 font-medium mt-2 xl:text-xl xl:leading-6">
                <span class="font-bold">
                  {{ cases[currentSlide - 1].advantage.title }}
                </span>
                {{ cases[currentSlide - 1].advantage.text }}
              </p>
              <p class="mt-2 text-sm xl:text-xl xl:leading-6 text-white leading-4 font-medium relative">
                <span class="font-bold">Task: </span>
                {{ cases[currentSlide - 1].task }}
              </p>
              <p class="mt-8 xl:text-xl xl:leading-6 text-sm leading-4 text-white font-medium">
                <span class="font-bold">Stack:</span>
                {{ cases[currentSlide - 1].stack }}
              </p>
              <p class="mt-8 font-medium text-white leading-5 pb-2 xl:text-xl xl:leading-6">
                {{ cases[currentSlide - 1].present }}
              </p>
            </div>
          </div>
          <div class="flex-1 rounded-45 overflow-hidden relative">
            <img
              v-for="(work, index) in cases"
              :key="work.title + currentSlide"
              :src="require(`~/assets/images/index/cases/${index + 1}.png`)"
              class="w-full h-full object-cover object-center absolute top-0 left-0"
              :class="index + 1 === currentSlide ? 'z-1' : 'opacity-0'"
            />
          </div>
        </div>
        <div class="lg:hidden xl:hidden">
          <div class="flex items-center justify-between">
            <p class="text-3xl leading-10 font-bold">Selected Works</p>
            <div class="flex items-center gap-2 mt-4 transition-all duration-1000">
              <p class="text-xl leading-6 transition-all duration-1000" :class="`text-case-text-${currentSlideXs}`">
                {{ currentSlideXs }}
              </p>
              <div class="w-32 h-px bg-white relative">
                <div
                  :style="{
                    transform: `scaleX(${currentSlideXs / cases.length})`,
                  }"
                  class="absolute top-0 left-0 w-full h-full origin-left transition-all duration-1000"
                  :class="`bg-case-text-${currentSlideXs}`"
                ></div>
              </div>
              <p class="text-xl leading-6 text-white">{{ cases.length }}</p>
            </div>
          </div>
          <client-only>
            <swiper
              :options="options"
              @slideChange="handleSlideChange"
              @init="handleSwiperInit"
              class="mt-4 overflow-visible"
            >
              <swiper-slide v-for="(work, index) in cases" :key="work.title">
                <a class="flex gap-2 items-center">
                  <div
                    class="h-5 w-5 rounded-full flex justify-center items-center transition-all duration-1000"
                    :class="`bg-case-text-${index + 1}`"
                  >
                    <LazyImage width="8" height="8" src="index/cases/arrow-icon.svg" />
                  </div>
                  <p class="text-xl leading-6 transition-all duration-1000" :class="`text-case-text-${index + 1}`">
                    {{ work.link }}
                  </p>
                </a>
                <div class="mt-6 caselist__image-wrapper-xs relative">
                  <LazyImage :src="`index/cases/${index + 1}.png`" class="w-full h-full object-cover rounded-30" />
                  <div class="absolute -bottom-16 sm:-bottom-12 left-0">
                    <p class="font-medium text-white caselist__title-xs">{{ work.title }}</p>
                    <p class="font-medium caselist__subtitle-xs" :class="`text-case-text-${index + 1}`">
                      {{ work.subtitle }}
                    </p>
                  </div>
                  <div
                    :key="currentSlideXs"
                    class="flex flex-wrap gap-2 mt-4 caselist__tag-group-xs absolute top-8 left-8"
                  >
                    <div
                      v-for="tag in work.tags"
                      :key="tag"
                      class="
                        caselist__tag-xs
                        rounded-60
                        py-1.5
                        px-3
                        text-sm
                        font-bold
                        leading-4
                        transition-all
                        duration-1000
                      "
                      :class="`text-case${index === 6 ? '' : '-text'}-${currentSlideXs}`"
                    >
                      {{ tag }}
                    </div>
                  </div>
                </div>
                <p class="mt-24 sm:mt-16 text-xl leading-6 font-medium">
                  <span class="font-bold">{{ work.advantage.title }}</span>
                  {{ work.advantage.text }}
                </p>
                <p class="mt-8 leading-5 font-medium">
                  <span class="font-bold">Stack:</span>
                  {{ work.stack }}
                </p>
                <p class="mt-2 leading-5 font-medium">
                  <span class="font-bold">Task:</span>
                  {{ work.task }}
                </p>
                <p class="mt-8 text-xl leading-6 font-medium">
                  {{ work.present }}
                </p>
                <button
                  style="width: 180px"
                  class="
                    mt-8
                    rounded-100
                    bg-white
                    text-black
                    font-medium
                    text-xl
                    leading-6
                    flex
                    justify-center
                    items-center
                    h-12
                  "
                >
                  More details
                </button>
              </swiper-slide>
            </swiper>
          </client-only>
          <div></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CasePage',
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
      offScroll: false,
      swiper: {},
      options: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      currentSlide: 1,
      currentSlideXs: 1,
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
      windowWidth: 0,
    }
  },
  computed: {
    isVisible() {
      return this.currentSection === this.$props.order
    },
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    scrollDirection() {
      return this.$store.state.indexScrollDirection
    },
  },
  methods: {
    handleSwiperInit(swiper) {
      this.swiper = swiper
    },
    handleSlideChange(swiper) {
      this.currentSlideXs = swiper.activeIndex + 1
    },
    defineWindowWidth() {
      this.windowWidth = window.innerWidth
      if (!this.isVisible) return
      if (this.windowWidth > 1199) this.changeBgColor(this.currentSlide)
      else this.changeBgColor(this.currentSlideXs)
    },
    changeBgColor(value) {
      switch (value) {
        case 1:
          this.$store.commit('changeBgColor', '#FF9B80')
          return
        case 2:
          this.$store.commit('changeBgColor', '#EBA35D')
          return
        case 3:
          this.$store.commit('changeBgColor', '#8479FF')
          break
        case 4:
          this.$store.commit('changeBgColor', '#E6CDB6')
          break
        case 5:
          this.$store.commit('changeBgColor', '#98B2FF')
          break
        case 6:
          this.$store.commit('changeBgColor', '#F2C459')
          break
        case 7:
          this.$store.commit('changeBgColor', '#509BFD')
          break
      }
    },
  },
  watch: {
    isVisible(visible) {
      if (!visible) return
      if (this.windowWidth > 1199) this.changeBgColor(this.currentSlide)
      else this.changeBgColor(this.currentSlideXs)
      if (this.scrollDirection === 'up') {
        this.currentSlide = this.cases.length
      } else {
        this.currentSlide = 1
      }
    },
    currentSlide(value) {
      if (this.windowWidth > 1199) this.changeBgColor(value)
    },
    currentSlideXs(value) {
      if (this.windowWidth <= 1199) this.changeBgColor(value)
    },
  },
  mounted() {
    this.defineWindowWidth()
    window.addEventListener('resize', this.defineWindowWidth)

    this.$refs.mainContainer.addEventListener('wheel', (event) => {
      if (this.windowWidth <= 1199) return
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.offScroll | event.ctrlKey) return

      if (event.deltaY > 0) {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 1000)
        setTimeout(() => {
          if (this.currentSlide === this.cases.length) this.$store.commit('nextSection')
          else this.currentSlide += 1
        }, 50)
      } else {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 800)
        setTimeout(() => {
          if (this.currentSlide === 1) this.$store.commit('prevSection')
          else this.currentSlide = this.currentSlide - 1
        }, 50)
      }
    })

    this.$refs.mainContainer.addEventListener('touchstart', (event) => {
      this.touchStartX = event.changedTouches[0].screenX
      this.touchStartY = event.changedTouches[0].screenY
    })
    this.$refs.mainContainer.addEventListener('touchend', (event) => {
      if (this.windowWidth > 1199) return
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
      this.diffX = Math.abs(this.touchEndX - this.touchStartX)
      this.diffY = Math.abs(this.touchEndY - this.touchStartY)
      if (this.diffY > this.diffX && this.touchEndY - this.touchStartY > 50) {
        setTimeout(() => {
          this.$store.commit('prevSection')
        }, 50)
      }
      if (this.diffY > this.diffX && this.touchStartY - this.touchEndY > 50) {
        setTimeout(() => {
          this.$store.commit('nextSection')
        }, 50)
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.caselist {
  &__slide-wrapper {
    height: 75%;
  }
  &__info-block {
    width: 430px;
    @media (max-width: 1919px) {
      width: 307px;
    }
  }
  &__title {
    width: 1400px;
    font-size: 100px;
    line-height: 121px;
    @media (max-width: 1919px) {
      font-size: 80px;
      line-height: 80px;
    }
    @media (max-height: 744px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  &__subtitle {
    width: 1400px;
    font-size: 90px;
    line-height: 110px;
    @media (max-width: 1919px) {
      font-size: 70px;
      line-height: 70px;
    }
    @media (max-height: 744px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  &__image-wrapper-xs {
    height: 678px;
    @media (max-height: 1270px) and (min-width: 1024px) {
      height: 500px;
    }
    @media (max-width: 1023px) {
      height: 402px;
      @media (max-height: 1000px) {
        height: 300px;
      }
    }
  }
  &__tag-xs {
    background-color: rgba(255, 255, 255, 0.8);
  }
  &__tag-group-xs {
    max-width: 310px;
  }
  &__title-xs {
    font-size: 80px;
    line-height: 80px;
    @media (max-width: 1023px) {
      font-size: 60px;
      line-height: 60px;
    }
  }
  &__subtitle-xs {
    font-size: 70px;
    line-height: 70px;
    @media (max-width: 1023px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
}
</style>