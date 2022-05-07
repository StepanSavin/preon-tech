<template>
  <div class="overflow-hidden">
    <HeaderXs />
    <CasePageXs />
    <TrustPartnersXs />
    <ServicesSolutionsXs />
    <AdvantageListXs />
    <StackListXs />
  </div>
</template>

<script>
import HeaderXs from '@/components/pages/index/indexMobile/HeaderXs'
import CasePageXs from '@/components/pages/index/indexMobile/CasePageXs'
import TrustPartnersXs from '@/components/pages/index/indexMobile/TrustPartnersXs'
import ServicesSolutionsXs from '@/components/pages/index/indexMobile/ServicesSolutionsXs'
import AdvantageListXs from '@/components/pages/index/indexMobile/AdvantageListXs'
import StackListXs from '@/components/pages/index/indexMobile/StackListXs'

export default {
  name: 'IndexMobile',
  components: {
    HeaderXs,
    CasePageXs,
    TrustPartnersXs,
    ServicesSolutionsXs,
    AdvantageListXs,
    StackListXs,
  },
}
</script>