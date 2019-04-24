import Shop from '../pages/shop/Shop'
import Order from '../pages/order/Order'
import Search from '../pages/search/Search'
import Profile from '../pages/profile/Profile'
export default [
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/shop'
  }
]
