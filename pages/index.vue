<template>
  <client-only>
    <div class="relative main-container">
      <full-page ref="fullpage" :options="options">
        <div v-for="n in 9" :key="n" class="section"></div>
      </full-page>
      <Header class="absolute top-0 left-0 bg-black" />
      <CasePage 
        class="absolute top-0 left-0"
        :currentSection="currentSection"
        :prevSection="prevSection"
      />
    </div>
  </client-only>
</template>

<script>
import Header from '@/components/pages/index/Header.vue'
import CasePage from '@/components/pages/index/CasePage.vue'

export default {
  name: 'IndexPage',
  components: { Header, CasePage },
  data() {
    return {
      options: {
        sectionsColor: ['black', 'red', '#0798ec'],
        scrollingSpeed: 700,
      },
      prevSection: 0,
      currentSection: 1,
    }
  },
  mounted() {
    window.addEventListener('wheel', () => {
      this.prevSection = this.currentSection
      this.currentSection = this.$refs.fullpage.api.getActiveSection().index + 1
    })
  },
}
</script>
