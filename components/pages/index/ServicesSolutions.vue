<template>
  <transition
    :name="scrollDirection === 'down' ? 'solutions-right' : 'solutions-reverse'"
  >
    <div
      v-if="!isAbove && !isBelow"
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
      <div class="flex items-center solutions__top-text">
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
            solutions__image
          "
          :class="`solutions__image_${index + 1}`"
        >
          <div
            style="bottom: 100%"
            :style="{ 'transition-delay': `${index * 150}ms` }"
            class="
              solutions__image-cover
              w-full
              absolute
              duration-1000
              top-0
              left-0
              bg-black
              z-9
            "
            :class="[`solutions__image-cover_${index + 1}`]"
          ></div>
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
  </transition>
</template>

<script>
export default {
  name: 'ServicesSolutions',
  props: {
    currentSection: {
      type: Number,
      required: true,
    },
    scrollDirection: {
      type: String,
      default: 'down',
    },
  },
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
  computed: {
    isAbove() {
      return this.$props.currentSection > 10
    },
    isBelow() {
      return this.$props.currentSection < 10
    },
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

  &-right {
    &-leave-active,
    &-enter-active,
    &-leave-active *,
    &-enter-active * {
      transition: all 1000ms;
      .solutions__image-cover {
        transition-duration: 1000ms !important;
      }
    }
    &-leave-active {
      .solutions__image_1 {
        transition-delay: 0ms !important;
      }
      .solutions__image_2 {
        transition-delay: 170ms !important;
      }
      .solutions__image_3 {
        transition-delay: 340ms !important;
      }
    }

    &-enter {
      .solutions__images-wrapper {
        transform: translateY(70vh);
      }
      .solutions__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
      .solutions__image-cover {
        bottom: 0 !important;
      }
      .solutions__text-block {
        opacity: 0;
      }
    }
    &-leave-to {
      .solutions__image {
        transform: translateY(-100vh) !important;
      }
      .solutions__images-wrapper {
        transform: translateY(-100vh) !important;
      }
      .solutions__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }

  &-reverse {
    &-leave-active,
    &-enter-active,
    &-leave-active *,
    &-enter-active * {
      transition: all 600ms;
      transition-delay: 100ms;
      .solutions__image-cover {
        transition-duration: 1000ms !important;
      }
    }
    &-leave-active {
      .solutions__image_1 {
        transition-delay: 0ms !important;
      }
      .solutions__image_2 {
        transition-delay: 170ms !important;
      }
      .solutions__image_3 {
        transition-delay: 340ms !important;
      }
    }

    &-enter {
      .solutions__images-wrapper {
        transform: translateY(-100vh);
      }
      .solutions__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
      .solutions__image-cover {
        bottom: 0 !important;
      }
      .solutions__text-block {
        opacity: 0;
      }
    }
    &-leave-to {
      transform: translateY(100vh) !important;
      .solutions__images-wrapper {
        opacity: 20%;
      }
      .solutions__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }
}
</style>