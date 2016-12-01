export default{
  state: {
    current: '',
  },
  mutations: {
    changeCurrent (state, tag) {
      state.current = tag
    }
  }
}
