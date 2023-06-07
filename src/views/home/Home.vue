<template>
	<div class="home">
		{{ $store.state.person }}
		<button @click="count++">+</button>
		<button @click="count--">-</button>
	</div>
</template>

<script>
// import store from "../../store/index";
import axios from "axios";

axios({
	url: "http://123.207.32.32:8000/home/multidata"
}).then(res => {
	console.log(res);
});
export default {
	name: "Home",
	// store,
	components: {},
	data() {
		return {
			count: 0
		};
	},
	methods: {},
	created() {
		document.title = "首页";
	}
};
</script>
