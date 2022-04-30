<template>
  <div class="partners w-full h-screen pt-32 px-24">
    <div class="flex gap-44 items-center">
      <p class="text-3xl text-white font-bold leading-10">We are trusted</p>
      <p class="text-white leading-5">
        We successfully work with the largest corporations and <br />
        startups from around the world
      </p>
    </div>
    <div class="flex mt-20">
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
            class="partners__item-text mt-6 text-gray-2 text-center font-medium"
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
</template>

<script>
export default {
  name: 'TrustPartners',
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
}
</script>

<style lang="scss">
.partners {
  &__item {
    min-width: 450px;
    max-width: unsetf;
    height: 450px;
    &-text {
      width: 346px;
    }

    &:hover .partners__item-text {
      color: white !important;
    }
  }
}
</style>