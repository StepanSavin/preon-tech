<template>
  <transition :name="scrollDirection === 'down' ? 'deals-down' : 'deals-up'">
    <div ref="mainContainer" v-show="isVisible" class="deals advantages w-full h-screen absolute top-0 left-0">
      <div class="deals w-full h-full pt-32 pl-24 md:px-16 sm:px-8 pb-12 md:pb-16 sm:pb-8 flex flex-col duration-1000">
        <div class="flex flex-1 gap-8">
          <div class="flex-1 flex flex-col w-full">
            <div class="flex items-center justify-between md:justify-start sm:justify-start deals__top-text">
              <p class="text-3xl text-white font-bold leading-10">Super Deals</p>
              <div class="flex items-center md:ml-28 sm:ml-10">
                <p class="text-white leading-5">For the company's first year of operation in 2021</p>
              </div>
            </div>
            <div
              class="
                deals__info-wrapper
                w-full
                flex-1
                mt-6
                relative
                flex flex-col
                justify-end
                md:justify-between
                sm:justify-between
              "
            >
              <div
                class="
                  absolute
                  top-0
                  left-0
                  flex flex-col
                  w-3
                  gap-2
                  items-center
                  z-5
                  md:top-8
                  sm:top-8 sm:left-10
                  md:left-10
                "
              >
                <p class="text-yellow-1 text-xl leading-6">{{ currentSlide }}</p>
                <div class="w-px h-24 bg-white relative">
                  <div
                    :style="{ transform: `scaleY(${currentSlide / 3})` }"
                    class="bg-yellow-1 absolute top-0 left-0 h-full w-full origin-top duration-1000"
                  ></div>
                </div>
                <p class="text-white text-xl leading-6">3</p>
              </div>

              <transition-group
                tag="div"
                class="
                  deals__image-wrapper
                  md:w-full
                  sm:w-full
                  relative
                  rounded-l-45
                  hidden
                  md:block
                  sm:block sm:overflow-hidden
                  md:overflow-hidden
                  rounded-30
                "
                name="deals-images"
              >
                <img
                  v-for="n in deals.length"
                  :key="n + `${currentSlide}`"
                  :src="require(`@/assets/images/index/deals/${currentSlide}-md.png`)"
                  class="absolute object-cover w-full top-0 left-0 rounded-l-45"
                />
              </transition-group>
              <transition name="deals-text">
                <div :key="currentSlide" class="w-full mb-12 pr-20">
                  <div class="font-semibold text-white leading-5 relative w-max">
                    {{ deals[currentSlide - 1].subtext }}
                    <div
                      :key="currentSlide"
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
                    {{ deals[currentSlide - 1].title }}
                  </p>
                  <p class="mt-6 leading-5 font-semibold text-white">
                    {{ deals[currentSlide - 1].text }}
                  </p>
                  <div class="mt-4">
                    <div
                      v-for="dealItem in deals[currentSlide - 1].list"
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
            class="deals__image-wrapper relative rounded-l-45 md:hidden sm:hidden"
            name="deals-images"
          >
            <img
              v-for="n in deals.length"
              :key="n + `${currentSlide}`"
              :src="require(`@/assets/images/index/deals/${currentSlide}.png`)"
              class="absolute w-full top-0 left-0 object-cover h-full rounded-l-45"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DealsList',
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      currentSlide: 1,
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
          title: 'The output of the site in the TOP 10 of the organic output of Google',
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
  watch: {
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', 'black')
    },
  },
  mounted() {
    if (this.$refs.scrollContainer) this.isScrollContainerExist = true

    this.$refs.mainContainer.addEventListener('wheel', (event) => {
      if (window.innerWidth <= 1199) return
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.offScroll | event.ctrlKey) return

      if (event.deltaY > 0) {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 1000)
        setTimeout(() => {
          if (this.currentSlide === this.deals.length) this.$store.commit('nextSection')
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
      this.isScrollOccured = false
    })

    this.$refs.mainContainer.addEventListener('touchend', (event) => {
      if (window.innerWidth > 1199) return
      if (this.isScrollOccured) return
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
      this.diffX = Math.abs(this.touchEndX - this.touchStartX)
      this.diffY = Math.abs(this.touchEndY - this.touchStartY)
      if (this.diffY > this.diffX && this.touchEndY - this.touchStartY > 70) {
        setTimeout(() => {
          if (this.currentSlide === 1) this.$store.commit('prevSection')
          else this.currentSlide = this.currentSlide - 1
        }, 50)
      }
      if (this.diffY > this.diffX && this.touchStartY - this.touchEndY > 70) {
        setTimeout(() => {
          if (this.currentSlide === this.deals.length) this.$store.commit('nextSection')
          else this.currentSlide = this.currentSlide + 1
        }, 50)
      }
    })

    if (this.isScrollContainerExist)
      this.$refs.scrollContainer.addEventListener('scroll', () => {
        console.log('scroll')
        this.isScrollOccured = true
      })
  },
}
</script>

<style lang="scss">
.deals {
  &__image-wrapper {
    width: 400px;
    @media (max-width: 1199px) and (min-width: 1024px) {
      height: 600px;
    }
    @media (max-width: 1023px) {
      height: 474px;
    }
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
    @media (max-width: 1199px) and (min-width: 1024px) {
    }
  }
  &-leave-to {
    @media (max-width: 1199px) and (min-width: 1024px) {
      opacity: 0 !important;
    }
  }
}

.deals {
  &-down {
    &-enter-active {
      .deals__top-text {
        transition: all 800ms;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transition: all 1000ms;
      }
    }
    &-leave-active {
      .deals__top-text {
        transition: all 800ms;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transition: all 1000ms;
      }
    }
    &-enter {
      .deals__top-text {
        transform: scaleY(0.1) !important;
        opacity: 0 !important;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transform: translateY(100vh);
      }
    }
    &-leave-to {
      .deals__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transform: translateY(-100vh);
      }
    }
  }

  &-up {
    &-enter-active {
      .deals__top-text {
        transition: all 800ms;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transition: all 1000ms;
      }
    }
    &-leave-active {
      .deals__top-text {
        transition: all 800ms;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transition: all 1000ms;
      }
    }
    &-enter {
      .deals__top-text {
        transform: scaleY(0.1) !important;
        opacity: 0 !important;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transform: translateY(-100vh);
      }
    }
    &-leave-to {
      .deals__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
      .deals__image-wrapper,
      .deals__info-wrapper {
        transform: translateY(100vh);
      }
    }
  }
}
</style>