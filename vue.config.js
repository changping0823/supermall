const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		resolve: {
			alias: {
				components: "@/components",
				content: "components/content",
				common: "components/common",
				assets: "@/assets",
				network: "@/network",
				views: "@/views"
			}
		}
	}
});

// const path = require("path");

// function resolve(dir) {
// 	return path.join(__dirname, dir);
// }

// module.exports = {
// 	lintOnSave: true,
// 	chainWebpack: config => {
// 		config.resolve.alias
// 			.set("@", resolve("src"))
// 			.set("@assets", resolve("src/assets"))
// 			.set("@components", resolve("src/components"))
// 			.set("@network", resolve("src/network"))
// 			.set("@router", resolve("src/router"))
// 			.set("@store", resolve("src/store"))
// 			.set("@views", resolve("src/views"));
// 	}
// };

// module.exports = {
// 	configureWebpack: {
// 		resolve: {
// 			alias: {
// 				assets: "@/assets",

// 				common: "@/common",

// 				components: "@/components",

// 				network: "@/network",

// 				views: "@/views"
// 			}
// 		}
// 	}
// };
