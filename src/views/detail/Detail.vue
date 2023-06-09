<template>
	<div id="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper class="detail-swiper" :images="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
		<detail-shop-info :shop="shop"></detail-shop-info>
	</div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";

import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";

import { getDetail, Goods, Shop } from "network/detail.js";

export default {
	name: "Detail",
	components: {
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo
	},
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {}
		};
	},
	created() {
		this.iid = this.$route.params.iid;
		getDetail(this.iid).then(res => {
			// 2.1.获取结果
			const data = res.result;
			// 2.2.获取顶部信息
			this.topImages = data.itemInfo.topImages;
			// 2.3.获取商品信息
			this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
			// 2.4.获取店铺信息
			this.shop = new Shop(data.shopInfo);
		});
	},
	methods: {}
};
</script>

<style scoped>
#detail {
	height: 100vh;
	position: relative;
	z-index: 1;
	background-color: #fff;
}

/* .detail-swiper {
	width: 100%;
} */
</style>
