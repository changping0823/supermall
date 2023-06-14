import BackTop from "content/backTop/BackTop";

export const backTopMixin = {
	components: {
		BackTop
	},
	data() {
		return {
			isShowBackTop: false
		};
	},
	methods: {
		backTopClick() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	}
};
