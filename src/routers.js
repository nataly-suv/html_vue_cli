// import Vue from 'vue'
import VueRouter from 'vue-router';

import MainPage from './components/pages/MainPage';
import ArticlesPage from './components/pages/ArticlesPage';
import ProjectPage from './components/pages/ProjectPage';
import SomeTry from './components/pages/SomeTry';

export default new VueRouter({
    routes: [
        {
            path: '',
            component: MainPage
        },
        {
            path: '/Blog',
            component: ArticlesPage
        },
        {
            path: '/Project',
            component: ProjectPage
        },
        {
            path: '/try',
            component: SomeTry
        },
    ],
    mode: 'history',
})
