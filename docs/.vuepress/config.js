module.exports = {
	title: "Giao UI",
	base: "/giaoui/",
	lastUpdated: 'Last Updated',
	description: "用Vue造轮子",
	plugins: ['@vuepress/last-updated','@vuepress/back-to-top','@vuepress/nprogress'],
	themeConfig: {
		logo: "/giao.jpg",
		smoothScroll: true,
		nav: [
			{text: "主页", link: "/", target: "_self"},
			{text: "文档", link: "/doc/", target: "_self"},
			{text: "GitHub", link: "https://github.com/wanmaoor"},
		],
		sidebar: [
			{
				title: "开始上手",
				collapsable: false,
				children: ["/doc/"]
			},
			{
				title: "组件",
				collapsable: false,
				children: [
					"/component/1.md",
					"/component/2.md",
				]
			}
		]
	}
}