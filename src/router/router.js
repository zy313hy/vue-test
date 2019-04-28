import Shop from '../pages/shop/Shop'
import Order from '../pages/order/Order'
import Search from '../pages/search/Search'
import Profile from '../pages/profile/Profile'
import Login from '../pages/login/Login'
import Store from '../pages/store/Store'
import Goods from '../pages/store/goods/Goods'
import Rating from '../pages/store/rating/Rating'
import Info from '../pages/store/info/Info'
export default [
  {
    path:'/shop',
    component:Shop,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/shop'
  },
  {
    path:'/store',
    component:Store,
    children:[
      {
        path:'/store/goods',
        component:Goods,
      },
      {
        path:'/store/info',
        component:Info
      },
      {
        path:'/store/ratings',
        component:Rating
      },
      {
        path: '/',
        redirect: '/store/goods'
      },
    ]
  }
]
