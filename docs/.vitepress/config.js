
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的日记",
  description: "一个 VitePress 站点",
  base: '/daily/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/addychang/daily' }
    ]
  }
})
