const mutations = {
	addCounter(state, playload) {
		playload.count += 1;
	},
	addToCart(state, playload) {
		state.cartList.push(playload);
	}
};

export default mutations;
