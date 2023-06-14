<template>
	<div id="cart">
		<nav-bar class="cart-nav-bar">
			<div slot="center">购物车（{{ cartCount }}）</div>
		</nav-bar>
		<div class="content">
			<cart-list class="cart-list" :products="cartList"></cart-list>
		</div>
	</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComponents/CartList.vue";

export default {
	name: "Cart",
	components: {
		NavBar,
		CartList
	},
	created() {
		document.title = "购物车";
	},
	computed: {
		cartList() {
			console.log(this.$store.getters.cartList);
			return this.$store.getters.cartList;
		},
		cartCount() {
			return this.$store.getters.cartCount;
		}
	}
};
</script>

<style scoped>
#cart {
	position: relative;
}

.cart-nav-bar {
	position: fixed;
	background-color: var(--color-tint);
	color: #fff;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
}

.content {
	height: calc(100vh - 44px - 49px); /* 根据需要调整高度 */
}

.cart-list {
	height: 100%; /* 确保容器占满父容器的高度 */
	overflow: auto; /* 显示滚动条 */
}
</style>
