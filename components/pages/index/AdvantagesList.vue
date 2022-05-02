<template>
  <transition
    :name="scrollDirection === 'down' ? 'advantages-down' : 'advantages-up'"
  >
    <div
      v-if="isVisible"
      class="advantages w-full h-screen pt-32 px-24 flex flex-col pb-12"
    >
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
          <div class="advantages__vertical-line w-px h-full bg-gray-3"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 advantages__top-text">
        <p class="text-3xl text-white font-bold leading-10">
          Figures of importance
        </p>
        <div class="flex items-center">
          <p class="text-white leading-5">
            For the company's first year of operation in 2021
          </p>
        </div>
      </div>
      <div
        class="
          mt-10
          grid grid-cols-3
          text-xs
          uppercase
          text-white
          font-bold
          advantages__headers
        "
      >
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
          v-for="(advantage, index) in advantages"
          :style="{ 'transition-delay': `${500 + 100 * index}ms` }"
          :key="advantage.number"
          class="flex flex-col justify-center pr-4 advantages__block"
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
            <LazyImage
              width="12"
              height="12"
              src="index/advantages/arrow.svg"
            />
          </div>
          <p class="advantages__number font-semibold mb-1 text-white">
            {{ advantage.number }}
          </p>
          <p class="text-white text-xl leading-6">{{ advantage.text }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AdvantagesList',
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
  computed: {
    isVisible() {
      return this.$props.currentSection === 11
    },
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

  &-down {
    &-leave-active,
    &-enter-active,
    &-leave-active *,
    &-enter-active * {
      transition: all 1000ms;
      .advantages__horizontal-line {
        transform-origin: left;
        transition: all 1000ms;
      }
      .advantages__vertical-line {
        transform-origin: top;
        transition: all 1000ms;
      }
      .advantages__block,
      .advantages__headers {
        transition: all 700ms;
        transition-delay: 500ms;
      }
      .advantages__top-text {
        transition: all 650ms;
        transition-delay: 500ms;
      }
    }
    &-enter {
      .advantages__horizontal-line {
        transform: scaleX(0);
      }
      .advantages__vertical-line {
        transform: scaleY(0);
      }
      .advantages__block,
      .advantages__headers {
        transform: translateY(100px);
        opacity: 0;
      }
      .advantages__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
    &-leave-to {
      transform: translateY(-100vh);
      .advantages__horizontal-line {
        transform: scaleX(0);
      }
      .advantages__vertical-line {
        transform: scaleY(0);
      }
      .advantages__block,
      .advantages__headers {
        transform: translateY(-100px);
        opacity: 0;
      }
      .advantages__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
  }
  &-up {
    &-leave-active,
    &-enter-active,
    &-leave-active *,
    &-enter-active * {
      transition: all 1000ms;
      .advantages__horizontal-line {
        transform-origin: left;
        transition: all 1000ms;
      }
      .advantages__vertical-line {
        transform-origin: top;
        transition: all 1000ms;
      }
      .advantages__block,
      .advantages__headers {
        transition: all 700ms;
        transition-delay: 500ms;
      }
      .advantages__top-text {
        transition: all 650ms;
        transition-delay: 500ms;
      }
    }
    &-enter {
      .advantages__horizontal-line {
        transform: scaleX(0);
      }
      .advantages__vertical-line {
        transform: scaleY(0);
      }
      .advantages__block,
      .advantages__headers {
        transform: translateY(-100px);
        opacity: 0;
      }
      .advantages__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
    &-leave-to {
      transform: translateY(100vh);
      .advantages__horizontal-line {
        transform: scaleX(0);
      }
      .advantages__vertical-line {
        transform: scaleY(0);
      }
      .advantages__block,
      .advantages__headers {
        transform: translateY(100px);
        opacity: 0;
      }
      .advantages__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
  }
}
</style>