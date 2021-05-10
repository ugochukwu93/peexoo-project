import Projects from './components/Portfolio-projects.vue';
import Homepage from './components/Homepage'
import Package from './components/pricing-package.vue'
import Availability from './components/Availability.vue'
import AboutManager from './components/About-manager.vue'


export const routes = [
    { path: '', component: Homepage},
    { path: '/project', component: Projects},
    { path: '/package', component: Package},
    { path: '/availability', component: Availability},
    { path: '/aboutManager', component: AboutManager},
    
]