<template>
  <div>
    <Navbar />
    <Nuxt />
    <MenuModal v-show="isMenuVisible" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MenuModal from '@/components/MenuModal.vue'

export default {
  components: { Navbar, MenuModal },
  computed: {
    isMenuVisible() {
      return this.$store.state.isMenuVisible
    },
  },
}
</script>