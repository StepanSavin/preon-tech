export const state = () => ({
  indexBgColor: 'black',
  indexCurrentSection: 1,
  indexScrollDirection: 'down',
})

export const mutations = {
  changeBgColor(state, value) {
    state.indexBgColor = value
  },
  nextSection(state) {
    state.indexScrollDirection = 'down'
    state.indexCurrentSection = state.indexCurrentSection + 1
  },
  prevSection(state) {
    if (state.indexCurrentSection === 1) return
    state.indexScrollDirection = 'up'
    state.indexCurrentSection = state.indexCurrentSection - 1
  },
  setSection(state, value) {
    if (value.nextSection > value.prevSection) state.indexScrollDirection = 'down'
    else state.indexScrollDirection = 'up'
    state.indexCurrentSection = value.nextSection
  },
}
