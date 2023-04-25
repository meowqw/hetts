export default {
    // products
    SET_PRODUCTS_TO_STATE: (state, products) => {
        for (let product of products) {
            product['quantity'] = 0
        }
      state.products = products;
    },
    // cart
    SET_CART: (state, product) => {
        if (state.cart.length) {
          let isProductExists = false;
          state.cart.map(function (item) {
            if (item.id === product.id) {
              isProductExists = true;
              item.quantity++;
            }
          });
          if (!isProductExists) {
            state.cart.push(product);
            product.quantity = 1;
          }
        } else {
          state.cart.push(product);
          product.quantity = 1;
        }
      },
      REMOVE_FROM_CART: (state, id) => {
        for (let product in state.cart) {
            if (state.cart[product].id === id) {
                state.cart.splice(product, 1);
            }
        }
      },
      INCREMENT_ITEM: (state, id) => {


        for (let product in state.cart) {
            if (state.cart[product].id === id) {
                state.cart[product].quantity++;
            }
        }

      },
      DECREMENT_ITEM: (state, id) => {
        for (let product in state.cart) {
            if (state.cart[product].id === id) {
                state.cart[product].quantity--;
            }
        }
      },
}