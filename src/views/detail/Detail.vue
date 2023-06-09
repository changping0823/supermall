<template>
	<div class="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper></detail-swiper>
	</div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";

import { getDetail } from "network/detail.js";

export default {
	name: "Detail",
	components: {
		DetailNavBar,
		DetailSwiper
	},
	data() {
		return {
			iid: null,
			topImages: []
		};
	},
	created() {
		this.iid = this.$route.params.iid;
		getDetail(this.iid).then(res => {
			console.log(res.result);
			console.log(res.result.itemInfo.topImages);
			this.topImages = res.result.itemInfo.topImages;
		});
	}
};
</script>

<style scoped>
.detail-swiper {
	width: 100%;
}
</style>
