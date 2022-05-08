<template>
  <transition :name="this.scrollDirection === 'down' ? 'partners' : 'partners-reverse'">
    <div v-show="isVisible" ref="mainContainer" class="w-full h-screen absolute top-0 left-0">
      <div class="w-full h-full flex flex-col justify-between pt-32 px-24 pb-20 md:px-16 sm:px-8">
        <div class="flex items-center">
          <p class="text-3xl text-white font-bold leading-10">We are trusted</p>
          <p class="text-white leading-5 partners__subtitle">
            We successfully work with the largest corporations and <br class="sm:hidden" />
            startups from around the world
          </p>
        </div>
        <div class="flex partners__items-wrapper">
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
              justify-around
              items-center
            "
          >
            <div class="flex flex-col items-center">
              <LazyImage :width="partner.width" :height="partner.height" :src="`index/partners/${index + 1}.svg`" />
              <p class="partners__item-text mt-6 text-gray-2 text-center font-medium">
                {{ partner.text }}
              </p>
            </div>
            <LazyImage width="46" height="40" alt="qoutes" src="index/partners/qoutes.svg" />
          </div>
        </div>
        <div class="h-2 w-32 bg-yellow-1 p-0.5 rounded-10 mx-auto">
          <div style="width: 30%" class="h-full bg-black rounded-10 origin-left"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'TrustPartners',
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [String, Number],
      default: '',
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
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', 'black')
    },
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
}
</script>

<style lang="scss">
.partners {
  &__subtitle {
    margin-left: 341px;
    @media (max-width: 1919px) {
      margin-left: 181px;
    }
    @media (max-width: 1199px) {
      margin-left: 62px;
    }
    @media (max-width: 1023px) {
      margin-left: 16px;
    }
  }
  &__item {
    min-width: 450px;
    width: 450px;
    height: 450px;
  }
  &__item-text {
    width: 80%;
  }
}
</style>