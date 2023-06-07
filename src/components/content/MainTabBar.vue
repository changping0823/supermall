<template>
	<tab-bar>
		<tab-bar-item path="/home" :activeColor="'#ff5777'">
			<img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category" :activeColor="'#ff5777'">
			<img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="" />
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart" :activeColor="'#ff5777'">
			<img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="" />
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile" :activeColor="'#ff5777'">
			<img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
			<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="" />
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
import TabBar from "components/common/tabbar/TabBar.vue";

export default {
	name: "Cart",
	components: {
		TabBar,
		TabBarItem
	},
	created() {
		document.title = "tabbar";
	}
};
</script>

<style scoped></style>
