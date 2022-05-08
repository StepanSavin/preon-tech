<template>
  <div>
    <div
      :style="{ 'background-color': bgColor }"
      class="relative h-screen xs:h-auto duration-1000 overflow-hidden xs:hidden"
    >
      <Header :currentSection="currentSection" :scrollDirection="scrollDirection" :order="1" @scrollDown="scrollDown" />
      <CasePage
        :currentSection="currentSection"
        :scrollDirection="scrollDirection"
        :order="2"
        @scrollDown="scrollDown"
        @scrollUp="scrollUp"
      />
      <TrustPartners
        :currentSection="currentSection"
        :scrollDirection="scrollDirection"
        class="absolute top-0 left-0"
      />
      <ServicesSolutions
        :currentSection="currentSection"
        :scrollDirection="scrollDirection"
        class="absolute top-0 left-0"
      />
      <AdvantagesList
        :currentSection="currentSection"
        :scrollDirection="scrollDirection"
        class="absolute top-0 left-0"
      />
      <StackList :currentSection="currentSection" :scrollDirection="scrollDirection" class="absolute top-0 left-0" />
      <ProcessesList
        :currentSection="currentSection"
        :scrollDirection="scrollDirection"
        class="absolute top-0 left-0"
      />
      <DealsList :currentSection="currentSection" :scrollDirection="scrollDirection" class="absolute top-0 left-0" />
      <ReviewsList :currentSection="currentSection" :scrollDirection="scrollDirection" class="absolute top-0 left-0" />
    </div>
    <IndexMobile class="hidden xs:block" />
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

import IndexMobile from '@/components/pages/index/indexMobile/IndexMobile'

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
    IndexMobile,
  },
  data() {
    return {
      currentSection: 1,
      scrollDirection: 'down',
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
    }
  },
  computed: {
    bgColor() {
      return this.$store.state.indexBgColor
    },
  },
  methods: {
    scrollDown() {
      this.currentSection += 1
    },
    scrollUp() {
      this.currentSection = this.currentSection - 1
    },
  },
}
</script>
