<template>
    <Master>
        <Loader v-show="isLoad" />
        <div v-show="!isLoad" class="container">
                <div class="row">
                    <div v-for="(p,i) in products" :key="i" class="col-md-4">
                        <div class="card p-3 m-3">
                            <div class="card-header">{{ p.name }}</div>
                            <div class="card-body" style="text-align:center;">
                                <img :src="p.image_link" alt="">
                            </div>
                            <div class="card-footer">
                                <span>Price: <small>${{ p.price }}</small></span>
                                <a @click="addToCart(p)" class="btn btn-sm btn-dark" style="float:right;">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </Master>
</template>

<script>
import Master from "../Layout/Master";
import Loader from "../Component/Loader";
import axios from "axios";
export default {
    components:{ Master,Loader },
    name: "ProductPage",
    data() {
        return {
            isLoad:true,
            products:[],
        }
    },
    created(){
        axios.get(
            "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        ).then((res)=> {
            this.products = res.data;
            this.isLoad = false;
        })
    },
    methods:{
        addToCart(p){
          var cart = this.$root.cart;
          var isinCart = cart.find((v) => {
            return v.id == p.id;
          });
          if(isinCart) {
            isinCart.qty++;
          }else{
            cart.push({ ...p,qty:1 });
          }
            
        }
    }
}
</script>