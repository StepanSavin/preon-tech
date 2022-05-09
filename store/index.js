import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

function manageScroll(display, el) {
  if (display) disableBodyScroll(el)
  else enableBodyScroll(el)
}

export const state = () => ({
  indexBgColor: 'black',
  indexCurrentSection: 5,
  indexScrollDirection: 'down',
  isMenuVisible: false,
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
  toggleMenu(state) {
    state.isMenuVisible = !state.isMenuVisible
    const el = document.querySelector('#menuModal')
    manageScroll(state.isMenuVisible, el)
  },
}
