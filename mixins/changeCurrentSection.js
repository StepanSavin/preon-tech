export default {
  data() {
    return {
      offScroll: false,
      isScrollContainerExist: false,
      isScrollOccured: false,
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
    }
  },
  mounted() {
    if (this.$refs.scrollContainer) this.isScrollContainerExist = true

    this.$refs.mainContainer.addEventListener('wheel', (event) => {
      if (window.innerWidth <= 1199) return
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.offScroll | event.ctrlKey) return
      this.isScrollOccured = false

      if (event.deltaY > 0) {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 1000)
        setTimeout(() => {
          if (this.isScrollOccured) return
          this.$store.commit('nextSection')
        }, 50)
      } else {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 800)
        setTimeout(() => {
          if (this.isScrollOccured) return
          this.$store.commit('prevSection')
        }, 50)
      }
    })

    this.$refs.mainContainer.addEventListener('touchstart', (event) => {
      this.touchStartX = event.changedTouches[0].screenX
      this.touchStartY = event.changedTouches[0].screenY
      this.isScrollOccured = false
    })

    this.$refs.mainContainer.addEventListener('touchend', (event) => {
      if (window.innerWidth > 1199) return
      if (this.isScrollOccured) return
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
      this.diffX = Math.abs(this.touchEndX - this.touchStartX)
      this.diffY = Math.abs(this.touchEndY - this.touchStartY)
      if (this.diffY > this.diffX && this.touchEndY - this.touchStartY > 70) {
        setTimeout(() => {
          this.$store.commit('prevSection')
        }, 50)
      }
      if (this.diffY > this.diffX && this.touchEndY < this.touchStartY) {
        setTimeout(() => {
          this.$store.commit('nextSection')
        }, 50)
      }
    })

    if (this.isScrollContainerExist)
      this.$refs.scrollContainer.addEventListener('scroll', () => {
        console.log('scroll')
        this.isScrollOccured = true
      })
  },
}
