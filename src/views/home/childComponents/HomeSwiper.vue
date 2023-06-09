<template>
	<div class="home-swpier">
		<swiper v-if="banners.length">
			<swiper-item v-for="(item, index) in banners" :key="index">
				<a :href="item.link">
					<img :src="item.image" alt="" @load="imageLoad" />
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";

export default {
	name: "HomeSwiper",
	props: {
		banners: {
			type: Array,
			default: []
		}
	},
	components: {
		Swiper,
		SwiperItem
	},
	methods: {
		imageLoad() {
			this.$emit("homeSwiperImageLoad");
		}
	}
};
</script>
