<template>
    <Master>
        <div class="container">
            <table class="table table-striped">
                <tr>
                    <td>Name</td>
                    <td>Image</td>
                    <td>+ -</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
                <tr v-for="(p,i) in cart" :key="i">
                    <td>{{p.name}}</td>
                    <td>
                        <img :src="p.image_link" alt="">
                    </td>
                    <td>
                        <span @click="addQty(p)" class="btn btn-sm btn-success">+</span>
                        <span @click="reduceQty(p)" class="btn btn-sm btn-danger">-</span>
                    </td>
                    <td>
                        {{ p.qty }}
                    </td>
                    <td>
                        {{ p.qty*p.price }}
                    </td>
                </tr>
            </table>
        </div>
    </Master>
</template>

<script>
import Master from "../Layout/Master";
export default {
    components:{Master},
    name: "CartItem",
    data() {
        return {
            cart:[],
        }
    },
    created() {
        this.cart = this.$root.cart;
    },
    methods: {
        addQty(p) {
            p.qty++;
        },
        reduceQty(p) {
            p.qty--;
        }
    }
}
</script>