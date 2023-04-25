import { createStore } from "vuex";

import commonActions from "./actions/actions";

import getters from "./getters/getters";
import mutations from "./mutations/mutations";
import apiRequestsProduct from "./actions/api-requests-product";

const actions = {
    ...apiRequestsProduct,
    ...commonActions,

}

export default createStore({
    state: {
        // список продуктов
        products: [],
        // корзина
        cart: []
    },
    mutations,
    actions,
    getters
});