<template>
  <client-only>
    <div class="relative main-container">
      <full-page ref="fullpage" :options="options" class="sm:hidden xs:hidden">
        <div v-for="n in 9" :key="n" class="section"></div>
      </full-page>
      <Header v-show="false" class="absolute top-0 left-0 bg-black" />
      <CasePage
        v-show="false"
        class="absolute top-0 left-0"
        :currentSection="currentSection"
        :prevSection="prevSection"
      />
      <TrustPartners v-show="false" class="absolute top-0 left-0" />
      <ServicesSolutions class="absolute top-0 left-0" />
    </div>
  </client-only>
</template>

<script>
import Header from '@/components/pages/index/Header.vue'
import CasePage from '@/components/pages/index/CasePage.vue'
import TrustPartners from '@/components/pages/index/TrustPartners.vue'
import ServicesSolutions from '@/components/pages/index/ServicesSolutions.vue'

export default {
  name: 'IndexPage',
  components: { Header, CasePage, TrustPartners, ServicesSolutions },
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
