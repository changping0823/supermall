<template>
	<div class="detail-nav-bar">
		<nav-bar>
			<div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt="" /></div>
			<div slot="center" class="title">
				<div
					class="title-item"
					v-for="(item, index) in titles"
					:key="index"
					@click="itemClick(index)"
					:class="{ active: currentIndex === index }"
				>
					{{ item }}
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";

export default {
	name: "DetailNavBar",
	components: {
		NavBar
	},
	props: {
		titles: {
			type: Array,
			default: () => {
				return ["商品", "参数", "评论", "推荐"];
			}
		},
		currentIndex: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			localIndex: this.currentIndex
		};
	},
	methods: {
		backClick() {
			this.$router.back();
		},
		itemClick(index) {
			this.localIndex = index;
			this.$emit("navBarItemClick", index);
		}
	}
};
</script>

<style scoped>
.back img {
	margin-top: 12px;
}
.title {
	display: flex;
}
.title-item {
	flex: 1;
}
.active {
	color: var(--color-high-text);
}
</style>
