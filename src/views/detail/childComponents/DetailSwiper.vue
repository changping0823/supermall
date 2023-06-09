<template>
	<swiper class="swiper" :options="swiperOptions">
		<swiper-slide v-for="(item, index) in images" :key="index">
			<img :src="item" alt="" style="width: 100%" />
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
	name: "DetailSwiper",
	components: {
		Swiper,
		SwiperSlide
	},
	props: {
		images: {
			type: Array,
			default: []
		}
	},
	data() {
		return {
			swiperOptions: {
				loop: true,
				//自动播放
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				pagination: {
					el: ".swiper-pagination", //与slot="pagination"处 class 一致
					clickable: true //轮播按钮支持点击
				}
			}
		};
	}
};
</script>

<style scoped>
.swiper {
	width: 100%;
	height: 300px;
}
</style>
