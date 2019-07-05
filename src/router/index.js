import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/component/Login/userLogin.vue'
import AlarmShow from '@/component/Alarm/alarm-show.vue'
import Home from '@/component/Home/home.vue'
import AlarmTable from '@/component/Home/alarm-table.vue'
import CarInfoOption from '@/component/Home/car-info-option.vue'
import OptionButton from '@/component/Home/option-button.vue'
import Leaflet from '@/component/leaflet'
import leftNavigation from '@/component/Home/left-navigation'
import horizontalInfo from '@/component/Home/horizontal-info'
import topNavigation from '@/component/Home/top-navigation'
import DayData from '@/component/Home/day-data'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/AlarmShow',
            name: 'AlarmShow',
            component: AlarmShow
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        }
    ]
})