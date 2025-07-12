
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

    sidebar: [
      {
        text: '日记',
        items: [
          { text: '第一篇', link: '/posts/1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/addychang/daily' }
    ]
  }
})
