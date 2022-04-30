<template>
  <div class="w-full h-screen">
    <LazyImage
      width="1427"
      height="1080"
      alt="background"
      src="index/header/header-bg.png"
      class="header__bg-image absolute top-0"
    />
    <div class="header__text-block absolute left-0 flex gap-12 justify-between items-end px-24 w-full">
      <div class="flex-1">
        <p class="text-yellow-1 leading-5 font-medium">
          / Design & custom software development
        </p>
        <h1 class="header__title text-white font-semibold mt-2">
          DAO culture.<br />
          Startup speed.<br />
          Magic rates.
        </h1>
      </div>
      <div class="header__tag-block">
        <p class="text-white text-xl leading-6 font-medium tracking-tight">
          We <span class="text-yellow-1 font-bold">x-multiply</span> and
          <span class="text-yellow-1 font-bold">x-scale</span> businesses via
          high-tech ideas and custom it-solutions at → startup speed.
        </p>
        <div class="flex flex-wrap gap-2 mt-4">
          <div
            v-for="tag in tags"
            :key="tag"
            class="
              header__tag
              py-1.5
              px-3
              text-sm
              font-bold
              leading-4
              rounded-60
            "
          >
            {{ tag }}
          </div>
        </div>
      </div>
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
  data() {
    return {
      tags: [
        'App & Web',
        'CRM, ERP, MDM, BPMS',
        'AR/VR',
        'Machine Learning',
        'BPMS',
        'RPA',
        'NFT',
        'DeFi',
        'Blockchain',
        'Metaverse',
        'Biometrics',
      ],
    }
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
  &__title {
    font-size: 100px;
    line-height: 100px;
  }

  &__tag-block {
    width: 407px;
  }
  &__tag {
    background: rgba(220, 220, 220, 0.7);
  }
}
</style>