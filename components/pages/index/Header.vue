<template>
  <transition name="header">
    <div v-show="isVisible" class="w-full h-screen">
      <LazyImage
        width="1427"
        height="1080"
        alt="background"
        src="index/header/header-bg.png"
        class="header__bg-image absolute top-0"
      />
      <div
        class="
          header__text-block
          absolute
          md:relative
          sm:relative
          left-0
          flex
          sm:flex-col
          md:flex-col
          gap-12
          md:gap-20
          sm:gap-8
          justify-between
          items-end
          md:items-start
          sm:items-start
          px-24
          md:px-16
          sm:px-8
          w-full
          z-5
        "
      >
        <div class="flex-1">
          <p class="text-yellow-1 leading-5 font-medium">
            / Design & custom software development
          </p>
          <h1
            class="
              header__title
              text-white
              md:font-semibold
              sm:font-medium
              mt-2
              tracking-tight
            "
          >
            DAO culture.<br />
            Startup speed.<br />
            Magic rates.
          </h1>
        </div>
        <div class="header__tag-block">
          <p
            class="
              text-white text-xl
              leading-6
              md:leading-7
              sm:leading-7 sm:text-2xl
              font-medium
              tracking-tight
              header__tag-text
            "
          >
            We <span class="text-yellow-1 font-bold">x-multiply</span> and
            <span class="text-yellow-1 font-bold">x-scale</span> businesses via
            high-tech ideas and custom it-solutions at → startup speed.
          </p>
          <div class="flex flex-wrap gap-2 mt-4 md:mt-6 sm:mt-8">
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
          <button
            class="
              h-14
              rounded-100
              flex
              justify-center
              items-center
              text-xl
              leading-6
              font-medium
              mt-16
              bg-white
              w-60
            "
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Header',
  props: {
    currentSection: {
      type: Number,
      default: 0,
    },
    scrollDirection: {
      type: String,
      default: 'down',
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
  computed: {
    isVisible() {
      return this.$props.currentSection === 1
    },
  },
  watch: {
    currentSection(newValue) {
      if (newValue === 1) this.$emit('changeColor', 'black')
    },
  },
}
</script>

<style lang="scss">
.header {
  &__bg-image {
    right: -400px;
    max-width: unset;
    @media (max-width: 1199px) and (min-width: 1024px) {
      width: 1765px !important;
      height: 1336px !important;
      top: 0;
      right: unset !important;
      left: -152px;
    }
  }

  &__text-block {
    bottom: 262px;
    @media (max-width: 1199px) and (min-width: 1024px) {
      margin-top: 260px;
      bottom: unset;
    }
    @media (max-width: 1023px) and (min-width: 744px) {
      margin-top: 218px;
      bottom: unset;
    }
  }
  &__title {
    font-size: 100px;
    line-height: 100px;
    @media (max-width: 1199px) and (min-width: 1024px) {
      font-size: 120px;
      line-height: 120px;
    }
    @media (max-width: 1023px) and (min-width: 744px) {
      font-size: 90px;
      line-height: 90px;
    }
  }

  &__tag-block {
    width: 407px;
  }
  &__tag-text {
    @media (max-width: 1199px) and (min-width: 1024px) {
      width: 550px;
    }
    @media (max-width: 1023px) and (min-width: 744px) {
      width: 617px;
    }
  }
  &__tag {
    background: rgba(220, 220, 220, 0.7);
  }

  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-leave-to,
  &-enter {
    transform: translateY(-1200px);
    opacity: 0;
  }
}
</style>