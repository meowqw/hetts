import { createStore } from "vuex";

import commonActions from "./actions/actions";

import getters from "./getters/getters";
import mutations from "./mutations/mutations";
import apiRequestsProduct from "./actions/api-requests-product";
import apiRequestsAccount from "@/vuex/actions/api-requests-account";

const actions = {
    ...apiRequestsProduct,
    ...commonActions,
    ...apiRequestsAccount,

}

export default createStore({
    state: {
        // список продуктов
        products: [],
        // корзина
        cart: [],
        // данные акканута
        account: {},
        // данные оформления заказа
        orderData: {}
    },
    mutations,
    actions,
    getters
});