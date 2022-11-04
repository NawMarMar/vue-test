<template>
    <ul class="nav bg-dark py-4">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/product">Product</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-white" to="/cart">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge badge-pill bg-danger" style="font-size:9px">{{cart.length}}</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "NavItem",
    data() {
        return {
            cart:[],
        };
    },
    created() {
       this.cart = this.$root.cart;
    }

};
</script>

<style>

</style>