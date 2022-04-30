<template>
  <client-only>
    <div class="relative">
      <full-page :options="options">
        <div v-for="n in 3" :key="n" class="section"></div>
      </full-page>
      <Header class="absolute top-0 left-0" />
    </div>
  </client-only>
</template>

<script>
import Header from '@/components/pages/Header.vue'

export default {
  name: 'IndexPage',
  components: { Header },
  data() {
    return {
      options: {
        sectionsColor: ['#41b883', 'red', '#0798ec'],
      },
    }
  },
}
</script>
