import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../Page/Home";
import Product from "../Page/Product";
import Cart from "../Page/Cart";

Vue.use(VueRouter);

const routes = [
   {
    path: "/",
    name: "HomePage",
    component:Home,
   },
   {
    path: "/product",
    name: "ProductPage",
    component:Product,
   },
   {
    path: "/cart",
    name: "CartPage",
    component: Cart,
   }
];

const router = new VueRouter({
    mode:"history",
    routes:routes,
})
export default router;