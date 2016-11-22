import Vue from 'vue'
import App from './App'
Vue.config.debug = true;
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import indexrouter from './routes/index.js'
import productsrouter from './routes/products.js'
import samplesrouter from './routes/samples.js'
import endorsersrouter from './routes/endorsers.js'
import newsrouter from './routes/news.js'
import knowledgerouter from './routes/knowledge.js'
import aboutrouter from './routes/about.js'

// 使用一个数组把各个路由器拼接起来
var routes = [];
routes = routes
  .concat(indexrouter)
  .concat(productsrouter)
  .concat(samplesrouter)
  .concat(endorsersrouter)
  .concat(newsrouter)
  .concat(knowledgerouter)
  .concat(aboutrouter);

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
