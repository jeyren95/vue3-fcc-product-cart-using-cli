<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div class="top-bar-cart-link" @click="toggleSideBar">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <!-- router view is the page content -->
  <!-- router will decide what will be rendered in the router view -->
  <!-- use v-bind to pass props from the router to the components not registered here -->
  <router-view
  :inventory="inventory"
  :addToCart="addToCart"
  />
  <SideBar
  v-if="showSideBar"
  :toggleSideBar="toggleSideBar"
  :cart="cart"
  :inventory="inventory"
  :removeProduct="removeProduct"
  />
</template>

<script>
import food from './food.json'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      showSideBar: false,
      cart: {},
      inventory: food
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) {
        this.cart[name] = 0
      }
      this.cart[name] += quantity
    },
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    removeProduct (product) {
      delete this.cart[product]
    }
  }
}
</script>
