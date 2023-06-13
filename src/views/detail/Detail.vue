<template>
	<div id="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper class="detail-swiper" :images="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
		<detail-shop-info :shop="shop"></detail-shop-info>
		<detail-goods-info :detail-info="detailInfo"></detail-goods-info>
		<detail-param-info :param-info="paramInfo"></detail-param-info>
		<detail-comment-info :comment-info="commentInfo"></detail-comment-info>
		<goods-list :goods="recommends"></goods-list>
	</div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";

import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComponents/DetailParamInfo.vue";
import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from "network/detail.js";

export default {
	name: "Detail",
	components: {
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
		DetailParamInfo,
		DetailCommentInfo,
		GoodsList
	},
	data() {
		return {
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommends: []
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
			// 2.5.获取商品信息
			this.detailInfo = data.detailInfo;
			// 2.6.保存参数信息
			this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
			// 2.7.保存评论信息
			if (data.rate.list) {
				this.commentInfo = data.rate.list[0];
			}
		});

		getRecommend().then((res, err) => {
			if (err) {
				return;
			}
			this.recommends = res.data.list;
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
