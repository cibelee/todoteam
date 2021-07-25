import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from './components/index.vue'
import Createitem from './components/CreateItem.vue'


const routes = [
    { path: '/index', component: Index },
    { path: '/createitem', component: Createitem }
]
const router = new VueRouter({
    routes
})

export default router;