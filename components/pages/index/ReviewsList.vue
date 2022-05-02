<template>
  <div
    class="
      processes
      w-full
      h-screen
      z-20
      bg-red-200
      text-white
      pt-32
      pl-24
      flex flex-col
      duration-1000
    "
  >
    <div class="carousel-wrapper">
      <swiper ref="reviewSwiper" :options="options">
        <swiper-slide>
          <div class="w-10 h-10 bg-yellow-1"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.reviewSwiper.$swiper
    },
  },
  methods: {
    changeSwiper() {
      this.swiper.slideTo(3)
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  padding: 40px;
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-wrapper img {
    margin: auto;
    width: 200px;
    height: 200px;
    background-image: linear-gradient(gray 100%, transparent 0);
  }
}
</style>