<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view />
		<tab-controller class="tab-controller" :titles="['流行', '精选', '新款']"></tab-controller>
		<goods-list :goods="goods['pop'].list"></goods-list>
	</div>
</template>

<script>
import NavBar from "common/navbar/BavBar.vue";
import TabController from "@/components/content/tabcontroller/TabController.vue";

import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeData } from "network/home";
export default {
	name: "Home",
	components: {
		NavBar,
		TabController,
		HomeSwiper,
		RecommendView,
		FeatureView,
		GoodsList
	},
	data() {
		return {
			recommends: [],
			banners: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			}
		};
	},
	created() {
		document.title = "首页";
		this.getHomeMultidata();
		this.getHomeData("pop");
		this.getHomeData("new");
		this.getHomeData("sell");
	},
	methods: {
		getHomeMultidata() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			});
		},
		getHomeData(type) {
			const page = this.goods[type].page + 1;
			getHomeData(type, page).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page = page;
			});
		}
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
	z-index: 101;
}

li {
	height: 60px;
}
</style>
