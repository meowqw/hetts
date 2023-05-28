import { createStore } from "vuex";

import commonActions from "./actions/actions";

import getters from "./getters/getters";
import mutations from "./mutations/mutations";
import apiRequestsProduct from "./actions/api-requests-product";
import apiRequestsAccount from "@/vuex/actions/api-requests-account";
import apiRequestsOrder from "@/vuex/actions/api-requests-order";

const actions = {
    ...apiRequestsProduct,
    ...commonActions,
    ...apiRequestsAccount,
    ...apiRequestsOrder

}

export default createStore({
    state: {
        // список продуктов
        products: [],
        // корзина
        cart: [],
        // данные акканута
        account: {},
        token: '',
        // данные оформления заказа
        //
        orderData: [],
        payment: '',
        delivery: '',

        category: ''
    },
    mutations,
    actions,
    getters
});