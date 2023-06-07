<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
	</div>
</template>

<script>
import NavBar from "common/navbar/BavBar.vue";
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import { getHomeMultidata } from "network/home";
export default {
	name: "Home",
	components: {
		NavBar,
		HomeSwiper
	},
	data() {
		return {
			recommends: [],
			banners: []
		};
	},
	methods: {},
	created() {
		document.title = "首页";
		getHomeMultidata().then(res => {
			this.banners = res.data.banner.list;
			this.recommends = res.data.recommend.list;
		});
	}
};
</script>

<style scoped>
.home-nav {
	background-color: var(--color-tint);
	color: white;
}
</style>
