<template>
  <transition
    :name="this.scrollDirection === 'down' ? 'partners' : 'partners-reverse'"
  >
    <div
      v-if="!isAbove && !isBelow"
      class="
        partners
        w-full
        h-screen
        pt-32
        px-24
        md:px-16 md:pb-32 md:flex
        sm:px-8 sm:pb-32 sm:flex
        flex-col
        justify-between
      "
    >
      <div class="flex gap-44 md:gap-16 sm:gap-4 items-center">
        <p class="text-3xl text-white font-bold leading-10">We are trusted</p>
        <p class="text-white leading-5">
          We successfully work with the largest corporations and <br class="sm:hidden" />
          startups from around the world
        </p>
      </div>
      <div class="flex mt-20 partners__image-wrapper">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          :style="{ transform: `translateX(${-24 * index}px)` }"
          class="
            partners__item
            rounded-full
            border border-gray-2
            hover:border-yellow-1
            flex flex-col
            justify-between
            items-center
          "
        >
          <div class="flex flex-col items-center mt-12">
            <LazyImage :src="`index/partners/${index + 1}.svg`" />
            <p
              class="
                partners__item-text
                mt-6
                text-gray-2 text-center
                font-medium
              "
            >
              {{ partner.text }}
            </p>
          </div>
          <LazyImage
            width="46"
            height="40"
            alt="qoutes"
            src="index/partners/qoutes.svg"
            class="mb-10"
          />
        </div>
      </div>
      <div class="mt-16 h-2 w-32 bg-yellow-1 p-0.5 rounded-10 mx-auto">
        <div
          style="width: 30%"
          class="h-full bg-black rounded-10 origin-left"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TrustPartners',
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
      partners: [
        {
          width: '120',
          height: '120',
          text: "In terms of design and speed, XTR exceeded expectations. We were able to launch the first instance in Eastern Europe using Metaverse and AR, which resulted in a 33 percent boost in brand sales. We'll keep going in 2022-2024.",
        },
        {
          width: '120',
          height: '120',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum vel quis vitae aliquet sit. Pellentesque libero feugiat tempus congue vitae. Volutpat vehicula quis natoque sed tortor. ',
        },
        {
          width: '206',
          height: '107',
          text: "In terms of design and speed, XTR exceeded expectations. We were able to launch the first instance in Eastern Europe using Metaverse and AR, which resulted in a 33 percent boost in brand sales. We'll keep going in 2022-2024.",
        },
        {
          width: '78',
          height: '120',
          text: "In terms of design and speed, XTR exceeded expectations. We were able to launch the first instance in Eastern Europe using Metaverse and AR, which resulted in a 33 percent boost in brand sales. We'll keep going in 2022-2024.",
        },
        {
          width: '120',
          height: '120',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum vel quis vitae aliquet sit. Pellentesque libero feugiat tempus congue vitae. Volutpat vehicula quis natoque sed tortor. ',
        },
      ],
    }
  },
  watch: {
    currentSection(value) {
      if (value === 9) this.$emit('changeColor', 'black')
    },
  },
  computed: {
    isAbove() {
      return this.$props.currentSection > 9
    },
    isBelow() {
      return this.$props.currentSection < 9
    },
  },
}
</script>

<style lang="scss">
.partners {
  &__item {
    min-width: 450px;
    max-width: unset;
    height: 450px;
    &-text {
      width: 346px;
    }

    &:hover .partners__item-text {
      color: white !important;
    }
  }
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 900ms;
  }
  &-enter {
    transform: translateY(100vh);
    .partners__image-wrapper {
      transform: translateX(1000px);
    }
  }
  &-leave-to {
    transform: translateY(-100vh);
    .partners__image-wrapper {
      transform: translateX(-1000px);
    }
  }
  &-reverse {
    &-leave-active,
    &-enter-active,
    &-leave-active *,
    &-enter-active * {
      transition: all 900ms;
    }
    &-enter {
      transform: translateY(-100vh);
      .partners__image-wrapper {
        transform: translateX(1000px);
      }
    }
    &-leave-to {
      transform: translateY(100vh);
      .partners__image-wrapper {
        transform: translateX(-1000px);
      }
    }
  }
}
</style>