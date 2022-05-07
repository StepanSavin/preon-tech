<template>
  <client-only>
    <div class="partners-xs bg-black pt-20 px-6">
      <p class="text-white font-semibold text-2xl leading-8">We are trusted</p>
      <p class="mt-2 text-white font-medium leading-5">
        We successfully work with the largest corporations and startups from
        around the world
      </p>
      <swiper
        style="width: 298px"
        :options="options"
        class="mt-24 mx-auto overflow-visible"
        @slideChange="handleSlideChange"
      >
        <swiper-slide v-for="(partner, index) in partners" :key="index">
          <div
            class="
              partners-xs__slide
              rounded-full
              border border-gray-2
              hover:border-yellow-1
              flex flex-col
              justify-center
              items-center
            "
          >
            <LazyImage
              width="80"
              height="80"
              :src="`index/partners/${index + 1}.svg`"
            />
            <p
              style="max-width: 79%"
              class="mt-4 text-white text-xs leading-4 text-center font-medium"
            >
              {{ partner.text }}
            </p>
            <LazyImage
              width="30"
              height="26"
              alt="qoutes"
              src="index/partners/qoutes.svg"
              class="mt-4"
            />
          </div>
        </swiper-slide>
      </swiper>
      <div class="mt-36 h-2 w-32 bg-yellow-1 rounded-10 mx-auto p-0.5">
        <div
          :style="{
            transform: `translateX(${
              currentSlide * (116 / partners.length)
            }px)`,
          }"
          class="w-8 bg-black h-full rounded-10 duration-500"
        ></div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'TrustPartnersXs',
  data() {
    return {
      options: {
        spaceBetween: -18,
      },
      currentSlide: 0,
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
  methods: {
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex
    },
  },
}
</script>

<style lang="scss">
.partners-xs {
  padding-bottom: 114px;

  &__slide {
    width: 298px;
    aspect-ratio: 1/1;
  }
}
</style>