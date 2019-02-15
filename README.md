# nuxt

> 个人练习小小demo

## 项目运行

``` bash

git clone git@github.com:s-xianyu/nuxt_test.git

cd nuxt_text

npm install  或 yarn(推荐)

npm run dev

npm run build  打包(生成dist)

npm run start  打包完成后启动

```


# 项目布局

```
│  index.vue  默认页
│  list.text  
│  README.md
│  
├─detail
│      _id.vue  车辆详情页
│      
├─hx
│  │  amend.vue  设置页
│  │  info.vue   关于页
│  │  reg.vue   充值页
│  │  
│  └─page
│          scroll.vue  滚动置顶页
│          
└─page   page目录


For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
