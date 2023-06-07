<template>
	<div id="app">
		<!-- <rout-view></rout-view> -->
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
import MainTabBar from "./components/content/MainTabBar.vue";
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
