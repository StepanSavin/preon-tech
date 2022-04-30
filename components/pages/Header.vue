<template>
  <div class="w-full h-screen">
    <LazyImage
      width="1427"
      height="1080"
      alt="background"
      src="index/header-bg.png"
      class="header__bg-image absolute top-0"
    />
    <div class="header__text-block absolute left-0 flex gap-12 items-end px-24">
      <div class="flex-1">
        <p class="text-yellow-1 leading-5 font-medium">
          / Design & custom software development
        </p>
      </div>
      <div class="f"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    currentSection: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
.header {
  &__bg-image {
    right: -400px;
  }

  &__text-block {
    bottom: 262px;
  }
}
</style>