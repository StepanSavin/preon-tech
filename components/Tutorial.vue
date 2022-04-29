<!-- Please remove this file from your project -->
<template>
  <div>
    <full-page
      ref="fullpage"
      :options="options"
      @after-load="handleLeave"
      @on-slide-leave="handleLeave"
    >
      <div class="section">
        <button @click="a = $refs.fullpage.api.getActiveSection()">
          {{ a }}
        </button>
      </div>
      <div class="section">
        <button @click="a = $refs.fullpage.api.getActiveSection()">
          {{ a }}
        </button>
      </div>
    </full-page>
  </div>
</template>

<script>
// Import Swiper styles
export default {
  name: 'NuxtTutorial',
  components: {},
  data() {
    return {
      options: {
        sectionsColor: ['#41b883', 'red', '#0798ec'],
        onSlideLeave: () => {
          console.log('leave')
          this.a = 'asd'
        },
        beforeLeave: () => {
          console.log('leave')
          this.a = 'asd'
        },
      },
      a: 10,
    }
  },
  methods: {
    handleLeave() {
      console.log('leave')
    },
  },
  mounted() {
    console.log('asd')
    window.addEventListener('wheel', () => {
      this.a = this.$refs.fullpage.api.getActiveSection()
    })
  },
}
</script>

<style>
</style>
