import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import news from "../components/news"
import live from "../components/live"
import user from "../components/user"
import recommend from "../components/recommend"

import focusNews from "../components/channels/focusNews"
import vedio from "../components/channels/vedio"
import heBei from "../components/channels/heBeiProvince"
import internation from "../components/channels/internation"
import economy from "../components/channels/economy"
import military from "../components/channels/military"

const newsChildrenRoutes=[    //新闻页 频道(子路由)
  {path:"",component:focusNews,redirect:"focusNews"},
  {path:"focusNews",component:focusNews},
  {path:"vedio",component:vedio},
  {path:"heBei",component:heBei},
  {path:"internation",component:internation},
  {path:"economy",component:economy},
  {path:"military",component:military}
]

const routes=[
  {path:"/",component:news,redirect:"/news"},
  {path:"/user",component:user},
  {path:"/live",component:live},
  {path:"/news",component:news,children:newsChildrenRoutes},
  {path:"/recommend",component:recommend}
]

export default new VueRouter({
  routes,
  linkActiveClass:"active"
})