<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view />
		<tab-controller class="tab-controller" :titles="['流行', '精选', '新款']"></tab-controller>
		<ul>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
			<li>asdadasdsdasadasd</li>
		</ul>
	</div>
</template>

<script>
import NavBar from "common/navbar/BavBar.vue";
import TabController from "@/components/content/tabcontroller/TabController.vue";

import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";

import { getHomeMultidata } from "network/home";
export default {
	name: "Home",
	components: {
		NavBar,
		TabController,
		HomeSwiper,
		RecommendView,
		FeatureView
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
.home {
	padding-top: 44px;
}
.home-nav {
	background-color: var(--color-tint);
	color: white;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 100;
}
.tab-controller {
	position: sticky;
	top: 44px;
}

li {
	height: 60px;
}
</style>
