<template>
  <div class="stack w-full h-screen pt-32 px-24 flex flex-col duration-1000">
    <div class="px-24 absolute top-0 left-0 h-full w-full grid grid-cols-3">
      <div v-for="n in 3" :key="n" class="w-px bg-gray-2 h-full"></div>
    </div>
    <LazyImage
      width="1228"
      height="1080"
      src="index/stack/stack-bg.png"
      class="absolute right-0 stack__bg-image"
    />
    <div class="grid grid-cols-3 items-center">
      <p class="text-3xl text-white font-bold leading-10">Technologies</p>
      <p style="min-width: 488px" class="text-white leading-5">
        Proven track record of using advanced development <br />technology and
        ML models
      </p>
    </div>
    <div class="mt-6 grid grid-cols-3 z-5">
      <div v-for="(col, index) in stack" :key="index" class="mb-6">
        <div v-for="block in col" :key="block.title" class="mb-6">
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
</template>

<script>
export default {
  name: 'StackList',
  data() {
    return {
      stack: [
        [
          {
            title: 'Frontend',
            technologies: [
              'React/Next js',
              'React Material UI',
              'Styled-components и makeStyles от Material UI',
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
        ],
        [
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
        ],
        [
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
      ],
    }
  },
}
</script>

<style lang="scss">
.stack {
  &__bg-image {
    bottom: -294px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}
</style>