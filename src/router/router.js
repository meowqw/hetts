import { createRouter, createWebHistory } from "vue-router";

import hettsMain from "@/components/home/hetts-home-main.vue";
import hettsAccountMain from "@/components/account/hetts-account-main";
import hettsCartMain from "@/components/cart/hetts-cart-main";
import hettsProductCategory from "@/components/product/hetts-product-category";
import hettsAccountEdit from "@/components/account/hetts-account-edit";
import hettsAccountLogin from "@/components/account/hetts-account-login";
import hettsAccountRegister from "@/components/account/hetts-account-register";



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
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;