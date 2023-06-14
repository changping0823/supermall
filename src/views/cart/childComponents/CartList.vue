<template>
	<div class="scroll">
		<cart-list-item class="item" v-for="(item, index) in products" :key="index" :itemInfo="item"></cart-list-item>
	</div>
</template>

<script>
import CartListItem from "./CartListItem.vue";
export default {
	name: "CartList",
	props: {
		products: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	components: {
		CartListItem
	}
};
</script>

<style scoped>
/* .item {
	height: 88px;
} */
</style>
