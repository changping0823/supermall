// import { reject, resolve } from "core-js/fn/promise";
import originAxios from "axios";
import qs from "qs";

export default function axios(option) {
	return new Promise((resolve, reject) => {
		const instance = originAxios.create({
			baseURL: "http://123.207.32.32:7888/api/hy66/",
			timeout: 5000
		});

		instance.interceptors.request.use(
			config => {
				// console.log('来到了request拦截success中');
				// 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

				// 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

				// 3.对请求的参数进行序列化(看服务器是否需要序列化)
				// config.data = qs.stringify(config.data)
				// console.log(config);
				return config;
			},
			err => {
				return err;
			}
		);

		instance.interceptors.response.use(
			response => {
				return response.data;
			},
			err => {
				console.log(err);
				switch (err && err.response) {
					case 400:
						err.message = "请求错误";
						break;
					case 401:
						err.message = "未授权的访问";
						break;
				}
				return err;
			}
		);

		instance(option)
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				reject(err);
			});
	});
}
