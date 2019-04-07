export default {
  priceGetter: state => `$${state.price}`,
  priceGetterParameter: (state) => (str) => {
    return `${state.price}${str}`
  },

  num: state => state.num,
}