<template>
	<div class="tab-controller">
		<div
			v-for="(item, index) in titles"
			:key="index"
			class="tab-controller-item"
			:class="{ active: currentIndex === index }"
			@click="tabControllerClick(index)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabController",
	props: {
		titles: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			currentIndex: 0
		};
	},
	methods: {
		tabControllerClick(index) {
			this.currentIndex = index;
			this.$emit("tabControllerClick", index);
		}
	}
};
</script>

<style scoped>
.tab-controller {
	display: flex;
	width: 100%;
	text-align: center;
	height: 44px;
	line-height: 44px;
	background-color: white;
}
.tab-controller-item {
	flex: 1;
}

.active {
	color: var(--color-high-text);
}
.tab-controller-item span {
	padding: 5px;
	font-size: 15px;
}
.active span {
	border-bottom: 2px solid var(--color-high-text);
}
</style>
