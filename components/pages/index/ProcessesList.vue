<template>
  <transition
    :name="scrollDirection === 'down' ? 'processes-down' : 'processes-up'"
  >
    <div
      v-if="isVisible"
      class="processes w-full h-screen pt-32 pl-24 flex flex-col duration-1000"
    >
      <div class="flex items-center processes__top-text">
        <p class="text-3xl text-white font-bold leading-10">Processes</p>
        <div class="flex items-center">
          <p class="text-white leading-5 processes__subtext">
            Speed and quality are achieved by unique design and development
            <br />processes for it solutions. Automated project management
            system <br />gives the customer access to real-time reporting of all
            project details
          </p>
        </div>
      </div>
      <div class="flex-1 flex gap-20 mt-8 processes__main-block">
        <div class="flex-1 flex gap-4">
          <div class="w-8 h-full">
            <div class="w-px h-full mx-auto bg-white"></div>
          </div>
          <div class="flex-1 h-full relative">
            <div
              v-for="(process, index) in processes"
              :key="process.title"
              :style="{ top: `${60 * index}px` }"
              class="w-full absolute left-0 mb-3 duration-1000"
              :class="{
                'processes__active-process': section - 1 === index,
                'processes__next-process': section === index,
                'processes__disabled-process': index > section,
              }"
            >
              <p class="font-medium leading-5 text-white duration-1000">
                {{ process.date }}
              </p>
              <p
                class="mt-1 text-white leading-6 font-semibold duration-1000"
                :class="section - 1 === index ? 'text-2xl' : ' text-xl '"
              >
                {{ process.title }}
              </p>
              <p
                class="mt-2 text-xl leading-6 text-white duration-1000"
                :class="section - 1 === index ? '' : 'max-h-0 opacity-0'"
              >
                {{ process.text }}
              </p>
              <div
                style="left: -37px"
                class="
                  rounded-full
                  bg-white
                  w-2.5
                  h-2.5
                  absolute
                  top-0
                  transform
                  duration-1000
                "
                :class="{ 'scale-150': index + 1 === section }"
              ></div>
            </div>
          </div>
        </div>
        <div class="processes__image-wrapper relative">
          <transition-group tag="div" name="process-images">
            <img
              v-for="n in processes.length"
              :key="n + `${section}`"
              style="max-width: unset"
              width="500"
              height="490"
              :src="require(`@/assets/images/index/processes/${n}.png`)"
              class="absolute top-0 left-0"
              :class="{
                'z-2 opacity-1': n === section,
                'opacity-0': n !== section,
              }"
            />
          </transition-group>
          <transition name="process-advantage">
            <div
              :key="section"
              class="
                processes__advantage
                w-40
                h-40
                rounded-full
                absolute
                z-3
                flex flex-col
                justify-center
                items-center
              "
              :class="`bg-process-adv-${section}`"
            >
              <p class="text-white text-2xl font-medium leading-10">
                {{ processes[section - 1].advantage.number }}
              </p>
              <p
                style="font-size: 10px"
                class="text-white font-medium leading-3 text-center"
              >
                {{ processes[section - 1].advantage.text }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProcessesList',
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
      processes: [
        {
          date: '3 days',
          title: 'Preliminary assessment and start of work',
          text: 'The XTR team makes a preliminary cost estimate and road map for the launch. Result: Road Map, contract, project evaluation',
          advantage: {
            number: '3 days',
            text: 'or evaluation and road map',
          },
        },
        {
          date: '7 days',
          title: 'Team gathering',
          text: 'We connect systems analysts and it-architects with specialized experience to develop a prospective architecture and detailed TOR. Before launching the project, we present and interview the team with the customer',
          advantage: {
            number: '100%',
            text: 'teams with specialized experience',
          },
        },
        {
          date: '1-3 weeks',
          title: 'Design and engineering',
          text: 'We lay the groundwork for your IT project, including plans and risks. The result: Vision Scope, User Story Map, Design Concept, Architecture Diagram and Vision Document, detailed budget and project roadmap.',
          advantage: {
            number: '100%',
            text: 'technical documentation at startup speed',
          },
        },
        {
          date: '2 weeks for 1 sprint',
          title: 'Development',
          text: 'The process is based on Scrum and is iterative to ensure targeted results: Each feedback-based sprint lasts 2 weeks Synchronization and reporting takes place on a weekly basis Real-time progress reporting',
          advantage: {
            number: '0-5%',
            text: 'improvements due to 2 code reviews',
          },
        },
        {
          date: '7 days',
          title: 'Testing',
          text: 'Internal and combat testing. Debugging the it-solution',
          advantage: {
            number: '100%',
            text: 'test coverage of the entire IT solution',
          },
        },
        {
          date: '3,5 month',
          title: 'Release and training',
          text: 'The XTR team performs the release and delivers the project to the customer: including the code base, business and technical documentation, training manuals, and user manuals. Workshops are held to support the process',
          advantage: {
            number: '3 months',
            text: 'to release the first version of a complex IT startup',
          },
        },
        {
          date: '',
          title: 'Ongoing support and development',
          text: 'During this post-transfer phase, the XTR team maintains close contact with the customer to ensure proper operation, provide expert support and troubleshoot unforeseen problems, with an emphasis on continuous development.',
          advantage: {
            number: '30-40%',
            text: 'cheaper development due to unique processes',
          },
        },
      ],
    }
  },
  watch: {
    currentSection(newValue) {
      switch (newValue) {
        case 13:
          this.$emit('changeColor', '#FD815C')
          return
        case 14:
          this.$emit('changeColor', '#465281')
          return
        case 15:
          this.$emit('changeColor', '#2E0879')
          break
        case 16:
          this.$emit('changeColor', '#CFBC62')
          break
        case 17:
          this.$emit('changeColor', '#FD815C')
          break
        case 18:
          this.$emit('changeColor', '#FE4A4F')
          break
        case 19:
          this.$emit('changeColor', '#9C0EA8')
          break
      }
    },
  },
  computed: {
    section() {
      return this.$props.currentSection - 12
    },
    isVisible() {
      return (
        this.$props.currentSection >= 13 && this.$props.currentSection <= 19
      )
    },
  },
}
</script>

<style lang="scss">
.processes {
  &__subtext {
    margin-left: 260px;
  }
  &__image-wrapper {
    width: 395px;
  }
  &__active-process {
    top: calc(100% - 200px) !important;
  }
  &__next-process {
    top: calc(100% - 50px) !important;
    & > p {
      opacity: 50%;
    }
  }
  &__disabled-process {
    top: 150% !important;
  }
  &__advantage {
    top: 250px;
    left: -72px;
  }
}

.process-images {
  &-leave-active,
  &-enter-active {
    transition: all 700ms;
  }
  &-leave-active {
    opacity: 100% !important;
    transform: translateX(0) !important;
  }
  &-enter {
    transform: translateX(600px);
  }
}

.process-advantage {
  &-leave-active,
  &-enter-active {
    transition: all 0.7s;
  }
  &-enter {
    opacity: 0;
    transform: translateY(80px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(-80px);
  }
}

.processes {
  &-down {
    &-enter-active,
    &-enter-active * {
      transition: all 700ms;
    }
    &-leave-active,
    &-leave-active * {
      transition: all 700ms;
    }
    &-enter {
      .processes__main-block {
        transform: translateY(100vh);
      }
      .processes__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
    &-leave-to {
      .processes__main-block {
        transform: translateY(-100vh);
      }
      .processes__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }

  &-up {
    &-enter-active,
    &-enter-active * {
      transition: all 700ms;
    }
    &-leave-active,
    &-leave-active * {
      transition: all 700ms;
    }
    &-enter {
      .processes__main-block {
        transform: translateY(-100vh);
      }
      .processes__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
    &-leave-to {
      .processes__main-block {
        transform: translateY(100vh);
      }
      .processes__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }
}
</style>