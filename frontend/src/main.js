import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
  faUsers,
  faUserGroup,
  faUserCog,
  faUserCircle,
  faUserAlt,
  faUser,
  faStore,
  faSignOut,
  faShapes,
  faShareNodes,
  faShareFromSquare,
  faShareAltSquare,
  faShareAlt,
  faShare,
  faSave,
  faSackDollar,
  faRegistered,
  faPieChart,
  faPersonArrowDownToLine,
  faPerson,
  faLineChart,
  faLongArrowAltUp,
  faLongArrowAltRight,
  faLongArrowLeft,
  faLongArrowAltDown,
  faHome,
  faEdit,
  faEye,
  faCalendar,
  faCopy,
  faCogs,
  faChildren,
  faChild,
  faCheckCircle,
  faChessKing,
  faChartPie,
  faChartLine,
  faChartGantt,
  faChartBar,
  faChartColumn,
  faChartArea,
  faClock,
  faBullhorn,
  faBullseye,
  faBox,
  faBookmark,
  faBarChart,
  faArrowUp,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowAltCircleUp,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faArrowAltCircleDown,
  faAreaChart
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
  faUsers,
  faUserGroup,
  faUserCog,
  faUserCircle,
  faUserAlt,
  faUser,
  faStore,
  faSignOut,
  faShapes,
  faShareNodes,
  faShareFromSquare,
  faShareAltSquare,
  faShareAlt,
  faShare,
  faSave,
  faSackDollar,
  faRegistered,
  faPieChart,
  faPersonArrowDownToLine,
  faPerson,
  faLineChart,
  faLongArrowAltUp,
  faLongArrowAltRight,
  faLongArrowLeft,
  faLongArrowAltDown,
  faHome,
  faEdit,
  faEye,
  faCogs,
  faCopy,
  faChildren,
  faChild,
  faCheckCircle,
  faChessKing,
  faChartPie,
  faChartLine,
  faChartGantt,
  faChartColumn,
  faChartBar,
  faChartArea,
  faClock,
  faCalendar,
  faBullhorn,
  faBullseye,
  faBox,
  faBookmark,
  faBarChart,
  faArrowUp,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowAltCircleUp,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faArrowAltCircleDown,
  faAreaChart
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ProductsComponent from './pages/Products/ProductsComponent'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/produtos', name: 'products', component: ProductsComponent },
  { path: '/vendas', name: 'sales', component: HomeComponent },
  { path: '/relatorios', name: 'report', component: HomeComponent }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
