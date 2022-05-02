<template>
  <div
    class="
      z-10
      fixed
      top-0
      left-0
      w-full
      px-24
      h-20
      flex
      justify-between
      items-center
    "
  >
    <LazyImage width="56" height="32" src="navbar/logo.svg" />
    <div class="h-4 flex flex-col justify-between w-9">
      <div
        style="height: 3px"
        v-for="n in 2"
        :key="n"
        class="w-full bg-white"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>