<template>
  <div>
    <div
      :style="{ 'background-color': bgColor }"
      class="relative h-screen main-container duration-1000"
    >
      <Header
        class="absolute top-0 left-0"
        :currentSection="currentSection"
        :scrollDirection="scrollDirection"
        @changeColor="changeColor"
        @click.native="currentSection = 20"
      />
      <CasePage
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
        @leaveUp="mess"
        class="absolute top-0 left-0"
      />
    </div>
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
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
    }
  },
  mounted() {
    window.addEventListener('wheel', (event) => {
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.offScroll | event.ctrlKey) return

      if (event.deltaY > 0) {
        if (this.currentSection >= 23) return
        this.scrollDirection = 'down'
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 1000)
        setTimeout(() => {
          this.currentSection += 1
        }, 50)
      } else {
        this.scrollDirection = 'up'
        if (this.currentSection <= 1) return
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 800)
        setTimeout(() => {
          this.currentSection = this.currentSection - 1
        }, 100)
      }
    })

    window.addEventListener('touchstart', (event) => {
      this.touchStartX = event.changedTouches[0].screenX
      this.touchStartY = event.changedTouches[0].screenY
    })
    window.addEventListener('touchend', (event) => {
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
      this.diffX = Math.abs(this.touchEndX - this.touchStartX)
      this.diffY = Math.abs(this.touchEndY - this.touchStartY)
      if (this.diffY > this.diffX && this.touchEndY > this.touchStartY) {
        this.scrollDirection = 'up'
        if (this.currentSection === 1) return
        setTimeout(() => {
          if (this.currentSection === 9)
            this.currentSection = this.currentSection - 7
          else this.currentSection = this.currentSection - 1
        }, 100)
      }
      if (this.diffY > this.diffX && this.touchEndY < this.touchStartY) {
        this.scrollDirection = 'down'
        if (this.currentSection === 22) return
        setTimeout(() => {
          if (this.currentSection === 2) this.currentSection += 7
          else this.currentSection += 1
        }, 100)
      }
    })
  },
  methods: {
    changeColor(value) {
      this.bgColor = value
    },
    mess() {
      console.log('leaveUp')
    },
  },
}
</script>
