<template>
  <div
    :style="{ 'background-color': bgColor }"
    class="relative h-screen main-container duration-1000"
  >
    <Header
      class="absolute top-0 left-0"
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
    />
    <CasePage
      @click.native="currentSection = 11"
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
      class="absolute top-0 left-0"
    />
    <TrustPartners
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
      class="absolute top-0 left-0"
    />
    <ServicesSolutions
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
      class="absolute top-0 left-0"
    />
    <AdvantagesList
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
      class="absolute top-0 left-0"
    />
    <StackList
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      class="absolute top-0 left-0"
      @changeColor="changeColor"
    />
    <ProcessesList
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      class="absolute top-0 left-0"
      @changeColor="changeColor"
    />
    <DealsList
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
      class="absolute top-0 left-0"
    />
    <ReviewsList
      :currentSection="currentSection"
      :scrollDirection="scrollDirection"
      @changeColor="changeColor"
      class="absolute top-0 left-0"
    />
  </div>
</template>

<script>
import Header from '@/components/pages/index/Header.vue'
import CasePage from '@/components/pages/index/CasePage.vue'
import TrustPartners from '@/components/pages/index/TrustPartners.vue'
import ServicesSolutions from '@/components/pages/index/ServicesSolutions.vue'
import AdvantagesList from '@/components/pages/index/AdvantagesList.vue'
import ProcessesList from '@/components/pages/index/ProcessesList.vue'
import DealsList from '@/components/pages/index/DealsList.vue'
import StackList from '@/components/pages/index/StackList.vue'
import ReviewsList from '@/components/pages/index/ReviewsList.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    CasePage,
    TrustPartners,
    ServicesSolutions,
    AdvantagesList,
    ProcessesList,
    DealsList,
    StackList,
    ReviewsList,
  },
  data() {
    return {
      currentSection: 1,
      bgColor: 'black',
      offScroll: false,
      scrollDirection: 'down',
    }
  },
  mounted() {
    window.addEventListener('wheel', (event) => {
      if (this.offScroll | event.ctrlKey) return
      this.offScroll = true
      setTimeout(() => {
        this.offScroll = false
      }, 800)
      if (event.deltaY > 0) {
        this.scrollDirection = 'down'
        setTimeout(() => {
          this.currentSection += 1
        }, 50)
      } else {
        this.scrollDirection = 'up'
        setTimeout(() => {
          this.currentSection = this.currentSection - 1
        }, 100)
      }
    })
  },
  methods: {
    changeColor(value) {
      this.bgColor = value
    },
  },
}
</script>
