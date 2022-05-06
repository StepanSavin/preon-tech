<template>
  <transition :name="scrollDirection === 'down' ? 'stack-down' : 'stack-up'">
    <div
      v-if="isVisible"
      class="
        stack
        w-full
        relative
        overflow-hidden
        h-screen
        pt-32
        px-24
        md:px-16
        sm:px-8
        flex flex-col
        duration-1000
      "
    >
      <div
        class="
          stack__grid
          px-24
          absolute
          top-0
          left-0
          h-full
          w-full
          grid grid-cols-3
          md:hidden
          sm:hidden
        "
      >
        <div v-for="n in 3" :key="n" class="w-px bg-gray-2 h-full"></div>
      </div>
      <LazyImage
        width="1228"
        height="1080"
        src="index/stack/stack-bg.png"
        class="absolute right-0 stack__bg-image"
      />
      <div
        class="grid grid-cols-3 sm:flex sm:gap-4 items-center stack__top-text"
      >
        <p class="text-3xl text-white font-bold leading-10">Technologies</p>
        <p style="min-width: 488px" class="text-white leading-5">
          Proven track record of using advanced development <br />technology and
          ML models
        </p>
      </div>
      <div
        class="
          mt-6
          md:mt-12
          sm:mt-12
          grid grid-cols-3
          md:grid-cols-2
          sm:grid-cols-2 sm:gap-4
          md:gap-4
          z-5
          stack__main-block
        "
      >
        <div v-for="(col, index) in formattedStack" :key="index" class="mb-6">
          <div
            :style="{ 'transition-delay': `${index * 150}ms` }"
            v-for="(block, index) in col"
            :key="block.title"
            class="mb-6 stack__block"
          >
            <p class="font-semibold text-yellow-1 leading-8 mb-2">
              {{ block.title }}
            </p>
            <div
              v-for="tech in block.technologies"
              :key="tech"
              class="flex items-center gap-2 pl-2"
            >
              <div class="w-1 h-1 rounded-60 bg-white"></div>
              <p class="text-white">{{ tech }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'StackList',
  props: {
    currentSection: {
      type: Number,
      required: true,
    },
    scrollDirection: {
      type: String,
      default: 'down',
    },
  },
  data() {
    return {
      windowWidth: 1024,
      stack: [
        {
          title: 'Frontend',
          technologies: [
            'React/Next js',
            'React Material UI',
            'Styled-components и makeStyles from Material UI',
            'TypeScript',
            'ESLint/Prettier',
            'Docker',
          ],
        },
        {
          title: 'Backend',
          technologies: [
            'PHP',
            'PostgreSQL',
            'Laravel',
            'ElasticSearch',
            'MongoDB',
            'C, C#',
            'Python',
          ],
        },
        {
          title: 'The server part',
          technologies: [
            'Terraform',
            'GitHub',
            'AWS',
            'Docker в Fargate',
            'C#',
          ],
        },
        {
          title: 'ML',
          technologies: [
            'Logistic regression',
            'Linear Regression',
            'KNN K Nearest Neighbors',
            'Reference Vector Method (SVMs)',
            'Decision Trees & Random Forests',
            'Clustering',
            'DBSCAN Clustering',
            'Neural Networks',
          ],
        },
        {
          title: 'DML',
          technologies: [
            'DNN',
            'CAP',
            'VGG-19',
            'Inceptionv3',
            'ResNet50',
            'EfficientNet',
          ],
        },
        {
          title: 'Biometric / Cyber security',
          technologies: ['Opencv', 'Tensor Flow'],
        },
        {
          title: 'NFT / AR / VR',
          technologies: ['Unity', 'Vuforia', 'Wikitude', 'Arcore'],
        },
        {
          title: 'Blockchain & Crypto',
          technologies: [
            'ETH',
            'TRON',
            'BTC',
            'Tezos',
            'NEAR protocol',
            'C-Chain (Avalanche)',
          ],
        },
      ],
    }
  },
  computed: {
    isVisible() {
      return this.$props.currentSection === 12
    },
    formattedStack() {
      const array = []
      if (this.windowWidth < 1200) {
        array.push([])
        array.push([])
        array[0].push(this.stack[0])
        array[0].push(this.stack[1])
        array[0].push(this.stack[2])
        array[0].push(this.stack[6])
        array[1].push(this.stack[3])
        array[1].push(this.stack[4])
        array[1].push(this.stack[5])
        array[1].push(this.stack[7])
      } else {
        array.push([])
        array.push([])
        array.push([])
        array[0].push(this.stack[0])
        array[0].push(this.stack[1])
        array[0].push(this.stack[2])
        array[1].push(this.stack[3])
        array[1].push(this.stack[4])
        array[1].push(this.stack[5])
        array[2].push(this.stack[6])
        array[2].push(this.stack[7])
      }
      return array
    },
  },
  methods: {
    defineWindowWidth() {
      this.windowWidth = window.innerWidth
    },
  },
  watch: {
    currentSection(value) {
      if (value === 12) this.$emit('changeColor', 'black')
    },
  },
  mounted() {
    this.defineWindowWidth()
    window.addEventListener('resize', this.defineWindowWidth)
  },
}
</script>

<style lang="scss">
.stack {
  &__bg-image {
    bottom: -294px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  &-down {
    &-enter-active,
    &-enter-active * {
      .stack__block {
        transition: all 1000ms;
        transition-delay: 300ms;
      }
      .stack__top-text {
        transition: all 600ms;
        transition-delay: 300ms;
      }
    }
    &-leave-active,
    &-leave-active * {
      .stack__main-block,
      .stack__bg-image,
      .stack__grid,
      .stack__top-text {
        transition: all 600ms;
      }
    }

    &-enter {
      .stack__block {
        transform: translateY(150px);
        opacity: 0;
      }
      .stack__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
    &-leave-to {
      .stack__main-block,
      .stack__grid {
        transform: translateY(-100vh);
      }

      .stack__bg-image {
        opacity: 0;
      }
      .stack__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
  }

  &-up {
    &-enter-active,
    &-enter-active * {
      .stack__block {
        transition: all 600ms;
      }
      .stack__top-text {
        transition: all 600ms;
        transition-delay: 300ms;
      }
    }
    &-leave-active,
    &-leave-active * {
      .stack__main-block,
      .stack__bg-image,
      .stack__grid,
      .stack__top-text {
        transition: all 600ms;
      }
    }

    &-enter {
      .stack__block {
        transform: translateY(-150px);
        opacity: 0;
      }
      .stack__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
    &-leave-to {
      .stack__main-block,
      .stack__grid {
        transform: translateY(100vh);
      }

      .stack__bg-image {
        opacity: 0;
      }
      .stack__top-text {
        transform: scaleY(0.1);
        opacity: 0;
      }
    }
  }
}
</style>