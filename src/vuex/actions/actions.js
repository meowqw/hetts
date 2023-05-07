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
    }
};