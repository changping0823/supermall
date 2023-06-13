<template>
	<div id="detail" ref="scrollContainer" @scroll="handleScroll">
		<div class="content">
			<detail-nav-bar
				ref="navbar"
				@navBarItemClick="navBarItemClick"
				:current-index="currentIndex"
			></detail-nav-bar>
			<detail-swiper class="detail-swiper" :images="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detail-info="detailInfo"></detail-goods-info>
			<detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
			<detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
			<goods-list :goods="recommends" ref="recommend"></goods-list>
		</div>
		<div class="detail-tool"></div>
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
			recommends: [],
			currentIndex: 0
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
	methods: {
		// 获取页面滚动距离
		handleScroll() {
			if (this.$refs.param == undefined) {
				return;
			}
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

			let param = this.$refs.param.$el;
			let comment = this.$refs.comment.$el;
			let recommend = this.$refs.recommend.$el;
			var index = 0;
			if (scrollTop < param.offsetTop) {
				index = 0;
			} else if (scrollTop >= param.offsetTop && scrollTop < comment.offsetTop) {
				index = 1;
			} else if (scrollTop >= comment.offsetTop && scrollTop < recommend.offsetTop) {
				index = 2;
			} else {
				index = 3;
			}
			if (this.currentIndex !== index) {
				this.currentIndex = index;
			}
		},
		navBarItemClick(index) {
			var tabOffsetTop = 0;
			if (index === 1) {
				tabOffsetTop = this.$refs.param.$el.offsetTop;
			} else if (index === 2) {
				tabOffsetTop = this.$refs.comment.$el.offsetTop;
			} else if (index === 3) {
				tabOffsetTop = this.$refs.recommend.$el.offsetTop;
			}
			window.scrollTo({
				top: tabOffsetTop,
				behavior: "auto"
			});
		}
	},
	mounted() {
		/// 监听页面滚动
		window.addEventListener("scroll", this.handleScroll);
	}
};
</script>

<style scoped>
#detail {
	height: 100vh;
	position: relative;
	z-index: 1;
	background-color: #fff;
}
.detail-nav-bar {
	position: fixed;
	background-color: white;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999; /* 设置一个较高的 z-index */
}

.content {
	margin-top: 44px;
	margin-bottom: 49px;
}
.detail-tool {
	position: fixed;
	background-color: white;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 49px;
	z-index: 999; /* 设置一个较高的 z-index */
}
</style>
