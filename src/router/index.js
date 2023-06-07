import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/home/Home.vue")
	},
	{
		path: "/home",
		name: "home",
		component: () => import("../views/home/Home.vue")
	},
	{
		path: "/cart",
		name: "cart",
		component: () => import("../views/cart/Cart.vue")
	},
	{
		path: "/category",
		name: "category",
		component: () => import("../views/category/Category.vue")
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("../views/profile/Profile.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
