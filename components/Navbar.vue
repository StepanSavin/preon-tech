<template>
  <div
    ref="navbarWrapper"
    class="px-24 md:px-16 sm:px-8 xs:px-6 fixed z-20 w-full xs:flex xs:items-center duration-1000"
    :class="[
      currentSection === 1 ? 'navbar_first-section ' : 'navbar_not-first-section',
      { 'xs:bg-black': isNavbarSolid },
    ]"
  >
    <div
      class="flex justify-between items-start xs:items-center w-full duration-1000"
      :class="currentSection === 1 ? 'mt-16 xs:mt-0' : 'mt-10 xs:mt-0'"
    >
      <div class="flex items-start xs:h-2.5">
        <LazyImage
          width="56"
          height="32"
          src="navbar/logo.svg"
          class="cursor-pointer"
          @click.native="handleLogoClick"
        />
        <div
          class="navbar__first-block md:hidden sm:hidden xs:hidden duration-1000"
          :class="{ 'navbar__hidden-element': isNavbarHidden }"
        >
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">Cases</p>
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">Processes</p>
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">
            Services & Solutions
          </p>
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">Super Deals</p>
        </div>
        <div
          class="navbar__second-block md:hidden sm:hidden xs:hidden duration-1000"
          :class="{ 'navbar__hidden-element': isNavbarHidden }"
        >
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">Technologies</p>
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">Career</p>
          <p class="text-white font-semibold leading-5 mb-1.5 cursor-pointer hover:text-yellow-1">Mission</p>
        </div>
      </div>
      <div class="flex items-start">
        <div
          class="navbar__lang-switcher flex gap-4 md:hidden sm:hidden xs:hidden duration-1000"
          :class="{ 'navbar__hidden-element': isNavbarHidden }"
        >
          <p class="text-yellow-1 leading-5 font-semibold cursor-pointer">En</p>
          <p class="text-white leading-5 font-semibold cursor-pointer">Es</p>
        </div>
        <div class="relative">
          <div
            class="
              h-4
              xs:h-2.5
              flex flex-col
              justify-between
              w-9
              xs:w-5
              absolute
              top-0
              right-0
              duration-1000
              cursor-pointer
            "
            :class="$store.state.isMenuVisible || currentSection !== 1 ? 'opacity-1' : 'lg:opacity-0 xl:opacity-0'"
            @click="toggleMenuModal"
          >
            <div
              style="height: 3px"
              class="w-full bg-white xs:h-0.5 navbar__top-burger"
              :class="{ 'navbar__top-burger_active': $store.state.isMenuVisible }"
            ></div>
            <div
              style="height: 3px"
              class="w-full bg-white xs:h-0.5 navbar__bottom-burger"
              :class="{ 'navbar__bottom-burger_active': $store.state.isMenuVisible }"
            ></div>
          </div>
          <button
            style="width: 180px"
            class="
              bg-white
              rounded-100
              h-12
              flex
              justify-center
              items-center
              text-xl
              leading-6
              font-medium
              duration-1000
              md:hidden
              sm:hidden
              xs:hidden
            "
            :class="{ 'navbar__hidden-element': isNavbarHidden }"
            @click="toggleMenuModal"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isNavbarSolid: false,
    }
  },
  computed: {
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    isBgSolid() {
      return this.$store.state.isNavbarSolid
    },
    isNavbarHidden() {
      return this.currentSection !== 1 || this.$store.state.isMenuVisible
    },
  },
  methods: {
    handleLogoClick() {
      if (this.$store.state.isMenuVisible) return
      this.$store.commit('setSection', { prevSection: this.currentSection, nextSection: 1 })
    },
    toggleMenuModal() {
      this.$store.commit('toggleMenu')
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (document.querySelector('.header-xs').getBoundingClientRect().y < 0) this.isNavbarSolid = true
      else this.isNavbarSolid = false
    })
  },
}
</script>

<style lang="scss">
.navbar {
  &_first-section {
    height: 160px;
    @media (max-width: 743px) {
      height: 90px;
    }
  }
  &_not-first-section {
    height: 117px;
    @media (max-width: 743px) {
      height: 90px;
    }
  }

  &__first-block {
    margin-left: 235px;
    @media (max-width: 1919px) {
      margin-left: 155px;
    }
  }
  &__second-block {
    margin-left: 132px;
  }
  &__lang-switcher {
    margin-right: 330px;
    @media (max-width: 1919px) {
      margin-right: 170px;
    }
    @media (max-width: 1199px) {
      margin-right: 0;
    }
  }

  &__hidden-element {
    transform: translateY(-300px);
  }

  &__bottom-burger {
    transform-origin: 16%;
    transition: all 500ms;
    &_active {
      transform: rotate(-45deg);
    }
    @media (max-width: 743px) {
      transform-origin: 20%;
    }
  }
  &__top-burger {
    transform-origin: 32%;
    transition: all 500ms;
    &_active {
      transform: rotate(45deg);
    }
    @media (max-width: 743px) {
      transform-origin: 20%;
    }
  }
}
</style>