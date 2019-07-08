import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import qs from 'qs'
import L from 'leaflet'
import global from './datas/Global'

Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.prototype.globalData = global

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
