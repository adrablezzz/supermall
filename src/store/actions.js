import { ADD_COUNT, ADD_TO_CART } from "./mutations-types"

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldproduct = context.state.goodsList.find(item => item.iid === payload.iid)
      // console.log(oldproduct)
      if(oldproduct) {
        //1.相同商品count++
        context.commit(ADD_COUNT, oldproduct)
        resolve('商品数量+1')
      }else {
        //2.不同商品push进去
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  },
  toSelectAll(context) {
    //1.全部选中了: false
    if(context.getters.isSelectAll) {
      context.state.goodsList.forEach(item => item.checked = false);
    }else {
      context.state.goodsList.forEach(item => item.checked = true);
    }
  }
}