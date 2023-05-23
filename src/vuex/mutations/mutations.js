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
                product['checked'] = true;
            }
        } else {
            state.cart.push(product);
            product.quantity = 1;
            product['checked'] = true;
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

                if (state.cart[product].quantity < 0) {
                    state.cart.splice(product, 1);
                }
            }
        }
    },
    CHECK_ITEM: (state, id) => {
        for (let product in state.cart) {
            if (state.cart[product].id === id) {
                state.cart[product]['checked'] = !state.cart[product]['checked']
            }
        }
    },
    SET_ACCOUNT_TO_STATE: (state, account) => {
        state.account = account
    },
    SET_TOKEN_TO_STATE: (state, token) => {
        state.token = token;
    },
    SET_ORDER_DATA_TO_STATE: (state, orderData) => {
        state.orderData = orderData;
    },
    SET_ORDER_DELIVERY_TO_STATE: (state, delivery) => {
        state.delivery = delivery;
    },
    SET_ORDER_PAYMENT_TO_STATE: (state, payment) => {
        state.payment = payment;
    },
    SET_ORDER_TO_STATE: (state, order) => {
        state.order = order;
    },
    CLEAR_CART: (state) => {
        state.cart = [];
    }
}