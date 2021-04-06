import Projects from './components/Portfolio-projects.vue';
import Homepage from './components/Homepage'
import Package from './components/pricing-package.vue'
export const routes = [
    { path: '', component: Homepage},
    { path: '/project', component: Projects},
    { path: '/package', component: Package}
]