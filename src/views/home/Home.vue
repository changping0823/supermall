<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<scroll
			class="content"
			ref="scroll"
			:probeType="3"
			@scroll="scrollPosition"
			@pullingUp="pullingUp"
			:pull-up-load="true"
		>
			<home-swiper :banners="banners"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view />
			<tab-controller
				class="tab-controller"
				:titles="['流行', '精选', '新款']"
				@tabControllerClick="tabControllerClick"
			></tab-controller>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		<back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
	</div>
</template>

<script>
import NavBar from "common/navbar/BavBar.vue";
import TabController from "@/components/content/tabcontroller/TabController.vue";

import Scroll from "common/scroll/Scroll.vue";
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatureView from "./childComponents/FeatureView.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import BackTop from "@/components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeData } from "network/home";
export default {
	name: "Home",
	components: {
		NavBar,
		TabController,
		Scroll,
		HomeSwiper,
		RecommendView,
		FeatureView,
		GoodsList,
		BackTop
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list;
		}
	},
	data() {
		return {
			recommends: [],
			banners: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			currentType: "pop",
			isShowBackTop: false
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
		backTopClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
		scrollPosition(position) {
			this.isShowBackTop = -position.y > 1200;
		},
		pullingUp() {
			this.getHomeData(this.currentType);
		},
		tabControllerClick(index) {
			switch (index) {
				case 0:
					this.currentType = "pop";
					break;
				case 1:
					this.currentType = "new";
					break;
				case 2:
					this.currentType = "sell";
					break;
			}
		},
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
				this.$refs.scroll.scroll.refresh();
				this.$refs.scroll.finishPullUp();
			});
		}
	}
};
</script>

<style scoped>
.home {
	position: relative;
	padding-top: 44px;
	height: 100vh;
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
.content {
	position: absolute;
	overflow: hidden;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}
.tab-controller {
	position: sticky;
	top: 44px;
	z-index: 101;
}
</style>
