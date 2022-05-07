export default {
  data() {
    return {
      offScroll: false,
    }
  },
  mounted() {
    this.$refs.mainContainer.addEventListener('wheel', (event) => {
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.offScroll | event.ctrlKey) return

      if (event.deltaY > 0) {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 1000)
        setTimeout(() => {
          this.$emit('scrollDown')
        }, 50)
      } else {
        this.offScroll = true
        setTimeout(() => {
          this.offScroll = false
        }, 800)
        setTimeout(() => {
          this.$emit('scrollUp')
        }, 100)
      }
    })

    // this.$refs.mainContainer.addEventListener('touchstart', (event) => {
    //   this.touchStartX = event.changedTouches[0].screenX
    //   this.touchStartY = event.changedTouches[0].screenY
    // })
    // this.$refs.mainContainer.addEventListener('touchend', (event) => {
    //   this.touchEndX = event.changedTouches[0].screenX
    //   this.touchEndY = event.changedTouches[0].screenY
    //   this.diffX = Math.abs(this.touchEndX - this.touchStartX)
    //   this.diffY = Math.abs(this.touchEndY - this.touchStartY)
    //   if (this.diffY > this.diffX && this.touchEndY > this.touchStartY) {
    //     if (this.currentSection === 1) return
    //     setTimeout(() => {
    //       if (this.currentSection === 9)
    //         this.currentSection = this.currentSection - 7
    //       else this.currentSection = this.currentSection - 1
    //     }, 100)
    //   }
    //   if (this.diffY > this.diffX && this.touchEndY < this.touchStartY) {
    //     if (this.currentSection === 22) return
    //     setTimeout(() => {
    //       if (this.currentSection === 2) this.currentSection += 7
    //       else this.currentSection += 1
    //     }, 100)
    //   }
    // })
  },
}
