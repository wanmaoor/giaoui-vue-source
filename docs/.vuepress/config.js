module.exports = {
	title: "Giao UI",
	base: "/giaoui/",
	description: "用Vue造轮子",
	themeConfig: {
		logo: "/giao.jpg",
		nav: [
			{text: "主页", link: "/", target: "_self"},
			{text: "文档", link: "/doc/", target: "_self"},
			{text: "GitHub", link: "https://github.com/wanmaoor"},
		],
		sidebar: [
			{
				title: "开始上手",
				children: ["/doc/"]
			},
			{
				title: "组件",
				children: []
			}
		]
	}
}