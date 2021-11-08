export default {
  getTotalPrice(state) {
    return state.goodsList.filter(s => s.checked === true).reduce((preValue, item) => {
      return preValue + item.realPrice * item.count
    },0)
  },
  getTotalCount(state) {
    return state.goodsList.filter(s => s.checked === true).length
  },
  getCartLength(state) {
    return state.goodsList.length
  },
  isSelectAll(state) {
    if(state.goodsList.length === 0) return false
    return !state.goodsList.find(s => !s.checked)
  }
}