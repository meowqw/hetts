import { createRouter, createWebHistory } from "vue-router";

import hettsMain from "@/components/home/hetts-home-main.vue";
import hettsAccountMain from "@/components/account/hetts-account-main";
import hettsCartMain from "@/components/cart/hetts-cart-main";
import hettsProductCategory from "@/components/product/hetts-product-category";
import hettsAccountEdit from "@/components/account/hetts-account-edit";
import hettsAccountLogin from "@/components/account/hetts-account-login";
import hettsAccountRegister from "@/components/account/hetts-account-register";
import hettsOrderingCheckout from "@/components/ordering/hetts-ordering-checkout.vue";
import hettsOrderingDelivery from "@/components/ordering/hetts-ordering-delivery.vue";
import hettsOrderingPayment from "@/components/ordering/hetts-ordering-payment.vue";
import hettsOrderingPersonal from "@/components/ordering/hetts-ordering-personal.vue";
import hettsOrderingResult from "@/components/ordering/hetts-ordering-result.vue";
import hettsProductCard from "@/components/product/hetts-product-card.vue";



let routes = [
    {
        path: "/",
        name: "main",
        component: hettsMain,
    },
    {
        path: "/account",
        name: "account",
        component: hettsAccountMain,
    },
    {
        path: "/cart",
        name: "cart",
        component: hettsCartMain,
    },
    {
        path: "/product",
        name: "product",
        component: hettsProductCard,
    },
    {
        path: "/category",
        name: "category",
        component: hettsProductCategory,
    },
    {
        path: "/account-edit",
        name: "account-edit",
        component: hettsAccountEdit,
    },
    {
        path: "/login",
        name: "login",
        component: hettsAccountLogin,
    },
    {
        path: "/register",
        name: "register",
        component: hettsAccountRegister,
    },
    {
        path: "/checkout",
        name: "checkout",
        component: hettsOrderingCheckout,
        children: [
            {
                path: "delivery",
                name: "delivery",
                component: hettsOrderingDelivery,
            },
            {
                path: "payment",
                name: "payment",
                component: hettsOrderingPayment,
            },
            {
                path: "personal",
                name: "personal",
                component: hettsOrderingPersonal,
            },
            {
                path: "result",
                name: "result",
                component: hettsOrderingResult,
            },
        ]
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;