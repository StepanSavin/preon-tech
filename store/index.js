export const state = () => ({
  indexBgColor: 'black',
})

export const mutations = {
  changeBgColor(state, value) {
    state.indexBgColor = value
  },
}
