export default {
    ADD_TO_CART({commit}, product) {
        commit("SET_CART", product);
    },
    DELETE_FROM_CART({commit}, index) {
        commit("REMOVE_FROM_CART", index);
    },

    INCREMENT_CART_ITEM({commit}, index) {
        commit("INCREMENT_ITEM", index);
    },

    DECREMENT_CART_ITEM({commit}, index) {
        commit("DECREMENT_ITEM", index);
    },

    CHECK_CART_ITEM({commit}, index) {
        console.log(1)
        commit("CHECK_ITEM", index)
    },
    SET_ORDER_DATA({commit}, orderData) {
        commit('SET_ORDER_DATA_TO_STATE', orderData);
    },
    SET_ACCOUNT({commit}, account) {
        commit('SET_ACCOUNT_TO_STATE', account)
    },
    SET_ORDER_DELIVERY({commit}, delivery) {
        commit('SET_ORDER_DELIVERY_TO_STATE', delivery)
    },
    SET_ORDER_PAYMENT({commit}, payment) {
        commit('SET_ORDER_PAYMENT_TO_STATE', payment)
    },
};