<template>
  <div class="">
    <div
      :style="{ 'background-color': bgColor }"
      style="transition: background-color 1000ms"
      class="relative h-screen xs:h-auto overflow-hidden xs:hidden"
    >
      <Header :order="1" />
      <CasePage :order="2" />
      <TrustPartners :order="3" />
      <ServicesSolutions :order="4" />
      <AdvantagesList :order="5" />
      <StackList :order="6" />
      <ProcessesList :order="7" />
      <DealsList :order="8" />
      <ReviewsList :order="9" />
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
import StackList from '@/components/pages/index/StackList.vue'
import ProcessesList from '@/components/pages/index/ProcessesList.vue'
import DealsList from '@/components/pages/index/DealsList.vue'
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
    StackList,
    ProcessesList,
    DealsList,
    ReviewsList,
    IndexMobile,
  },
  data() {
    return {
      scrollDirection: 'down',
    }
  },
  computed: {
    bgColor() {
      return this.$store.state.indexBgColor
    },
  },
}
</script>
