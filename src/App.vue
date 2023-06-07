<template>
	<div id="app">
		<!-- <router-view></router-view> -->
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue";

export default {
	name: "App",
	components: {
		MainTabBar
	}
};
</script>

<style>
@import "assets/css/base.css";
</style>
