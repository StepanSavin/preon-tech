<template>
  <transition :name="scrollDirection === 'down' ? 'reviews-down' : 'reviews-up'">
    <div ref="mainContainer" v-show="isVisible" class="advantages w-full h-screen absolute top-0 left-0">
      <div
        ref="scrollContainer"
        class="reviews overflow-y-scroll w-full h-full text-white pt-32 px-24 md:px-16 sm:px-8 sm:pb-16 flex flex-col"
      >
        <div class="flex items-center reviews__top-text">
          <p class="text-3xl text-black font-bold leading-10">Reviews</p>
          <div class="flex items-center">
            <p class="text-black leading-5 reviews__subtext sm:ml-24">
              SMB, enterprise, and startup clients return to us because they’re<br class="sm:hidden" />
              happy with our work. Here’s what they say about XTR
            </p>
          </div>
        </div>
        <div class="mt-10 md:mt-12 sm:mt-12 flex gap-4 items-center reviews__pagination">
          <p class="text-black text-xl leading-6">{{ currentSlide }}</p>
          <div style="width: 260px" class="relative h-px bg-white">
            <div
              :style="{ transform: `scaleX(${currentSlide / 7})` }"
              class="origin-left absolute top-0 left-0 h-full w-full bg-black duration-1000"
            ></div>
          </div>
          <p class="text-white text-xl leading-6">{{ 7 }}</p>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <LazyImage width="14" height="14" src="index/reviews/arrow-left.svg" />
          </div>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <LazyImage width="14" height="14" src="index/reviews/arrow-right.svg" />
          </div>
        </div>
        <div class="mt-8 md:mt-12 sm:mt-12 w-full reviews__slider">
          <client-only>
            <swiper ref="reviewSwiper" :options="options" class="w-full" @slideChange="handleSlideChange">
              <swiper-slide v-for="n in 7" :key="n">
                <div class="flex gap-8 md:gap-12 sm:gap-12 sm:flex-col md:flex-col">
                  <div class="flex-1 relative">
                    <div class="flex items-center gap-6">
                      <div
                        class="reviews__avatar-wrapper rounded-full overflow-hidden flex justify-center items-center"
                      >
                        <LazyImage src="index/reviews/person.png" />
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-5 text-xl leading-6 font-medium">Olga Danilova</p>
                        <p class="mt-1 text-gray-5 font-medium">CEO "Uralsib"</p>
                        <p class="mt-3 font-semibold text-2xl leading-8 text-black">
                          „Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                          venenatis, lectus magna fringilla urna, porttitor“
                        </p>
                      </div>
                    </div>
                    <p class="mt-8 text-gray-6 text-xl leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, lectus euismod consequat
                      eleifend. Odio arcu sagittis pellentesque euismod tellus sed. Lorem ac sit feugiat tempor
                      consectetur nulla placerat urna. Proin morbi ultricies ornare ornare aliquam a proin. Elementum,
                      egestas vel, in. erat urna. Proin morbi ultricies ornare ornare aliquam a proin. Elementum,
                      egestas vel, inerat urna. Proin morbi ultricies ornare ornare aliquam a proin. Elementum, egestas
                      vel, in...
                    </p>
                    <div class="mt-2.5 flex gap-2 items-center md:hidden sm:hidden">
                      <p class="text-black text-xl font-medium leading-6">Read more</p>
                      <div class="w-8 h-8 flex justify-center items-center bg-black rounded-full">
                        <LazyImage width="14" height="14" src="index/reviews/arrow-down.svg" />
                      </div>
                    </div>
                    <LazyImage
                      width="174"
                      height="34"
                      src="index/reviews/uralsib-icon.png"
                      class="absolute md:static sm:static mt-10 left-0 bottom-0"
                    />
                  </div>
                  <div
                    class="
                      reviews__client-card
                      px-6
                      pt-6
                      pb-12
                      rounded-20
                      bg-gray-2
                      md:flex md:w-full md:pb-10 md:gap-32
                      sm:flex sm:p-0 sm:bg-transparent sm:gap-6 sm:w-full
                    "
                  >
                    <div>
                      <div class="flex items-center gap-2">
                        <LazyImage width="32" height="32" src="index/reviews/russia-icon.png" />
                        <p class="text-white text-xl leading-6 font-medium">Russia</p>
                      </div>
                      <p class="mt-10 text-white uppercase text-xs leading-4 font-bold">Project Summary</p>
                      <p class="mt-2 text-white leading-5 font-medium">Lorem ipsum dolor sit amet, consectetur</p>
                      <div class="mt-8 hidden md:block sm:block">
                        <p class="text-white text-xs font-bold leading-4 uppercase">Technologies</p>
                        <div class="mt-4 flex gap-2 flex-wrap w-full">
                          <div
                            v-for="tag in slides[0].techs"
                            :key="tag"
                            class="rounded-60 reviews__tag text-sm text-black font-bold leading-4 py-1.5 px-3"
                          >
                            {{ tag }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-white reviews__grid mt-8 rounded-10 w-full grid grid-cols-2 grid-rows-2">
                      <div
                        v-for="block in [
                          { title: 'Industry', text: 'Banking' },
                          { title: 'Team size', text: '8 specialists' },
                          { title: 'Duration', text: '2 months' },
                          { title: 'Budget', text: '$ 350k' },
                        ]"
                        :key="block.title"
                        class="flex flex-col justify-center items-center py-5"
                      >
                        <p class="text-xs leading-4 font-semibold text-gray-2 uppercase">
                          {{ block.title }}
                        </p>
                        <p class="mt-1 leading-5 text-black">{{ block.text }}</p>
                      </div>
                    </div>
                    <div class="mt-10 md:hidden sm:hidden">
                      <p class="text-white text-xs font-bold leading-4 uppercase">Technologies</p>
                      <div class="mt-4 flex gap-2 flex-wrap w-full">
                        <div
                          v-for="tag in slides[0].techs"
                          :key="tag"
                          class="rounded-60 reviews__tag text-sm text-black font-bold leading-4 py-1.5 px-3"
                        >
                          {{ tag }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'ReviewsList',
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      touchStartX: 0,
      touchEndX: 0,
      touchStartY: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
      options: {
        slidesPerView: 1,
        spaceBetween: 150,
      },
      slides: [
        {
          techs: ['App & Web', 'CRM, ERP, MDM, BPMS', 'Machine Learning', 'Biometrics'],
        },
      ],
      currentSlide: 1,
      swiper: {},
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
      if (value) this.$store.commit('changeBgColor', '#FF9B80')
    },
  },
  methods: {
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex + 1
    },
    initSwiper(swiper) {
      this.swiper = swiper
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.reviews {
  &__grid {
    @media (max-width: 1199px) and(min-width:1024px) {
      width: 360px !important;
    }
  }
  &__subtext {
    margin-left: 288px;
    @media (max-width: 1199px) and (min-width: 1024px) {
      margin-left: 169px;
    }
  }
  &__client-card {
    width: 33%;
  }
  &__tag {
    background-color: rgba(220, 220, 220, 0.7);
  }
  &__avatar-wrapper {
    width: 186px;
    min-width: 186px;
    height: 186px;
  }

  &-down {
    &-enter-active,
    &-enter-active * {
      transition: all 1000ms;
    }
    &-leave-active,
    &-leave-active * {
      transition: all 1000ms;
    }
    &-enter {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
    &-leave-to {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(-100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }

  &-up {
    &-enter-active,
    &-enter-active * {
      transition: all 1000ms;
    }
    &-leave-active,
    &-leave-active * {
      transition: all 1000ms;
    }
    &-enter {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(-100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
    &-leave-to {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }
}
</style>