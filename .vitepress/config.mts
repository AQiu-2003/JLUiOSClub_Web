import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { UserConfig } from 'vitepress/dist/node'
import { inject } from '@vercel/analytics'

inject();

const wechatIcon = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1711208744771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4250" data-darkreader-inline-fill="" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z" p-id="4251"></path><path d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z" p-id="4252"></path></svg>'

// https://vitepress.dev/reference/site-config
const viteConfig: UserConfig = {
  srcDir: 'docs',
  title: "JLU iOS Club",
  description: "一个教你从零开始创作专属App的社团",
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }]
  ],
  sitemap: {
    hostname: 'https://jluios.club'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '社团活动', link: '/activities/' },
      { text: '竞赛指导', link: '/competitions/' },
    ],

    sidebar: {
      '/activities/': [
        {
          text: '即将推出',
          items: [
            {text: '解锁iPad生产力', link: '/'},
            {text: '移动应用创新赛宣讲', link: '/'}
          ]
        },
        {
          text: '往期活动',
          items: [
            {text: '2023冬季WWDC-Swift特训营', link: '/'},
            {text: '购买Mac/iPad迎接高校生活——选购建议&经验分享', link: '/'},
            {text: 'macOS初体验', link: '/'},
            {text: '百团纳新', link: '/'}
          ]
        }
      ],
      '/competitions/': [
        {
          text: '社团竞赛',
          items: [
            {text: 'Swift 学生挑战赛', link: '/competitions/Swift-Student-Challenge'},
            {text: '移动应用创新赛', link: '/competitions/maic'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AQiu-2003/JLUiOSClub_Web/' },
      { icon: { svg: wechatIcon }, link: '/about-us/index'}
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/AQiu-2003/JLUiOSClub_Web/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2017-2024 吉林大学 Doers & Dreamers iOS Club'
    },

    search: {
      provider: 'local'
    }
  },

  mermaid: {

  },
  mermaidPlugin: {
    class: 'mermaid-container'
  }
}

export default withMermaid(defineConfig(viteConfig))
// export default defineConfig(viteConfig)
