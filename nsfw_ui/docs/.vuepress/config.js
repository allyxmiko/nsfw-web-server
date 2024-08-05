import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'nsfw请求说明',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/'],
    sidebar: false,
  }),

  bundler: viteBundler(),
})
