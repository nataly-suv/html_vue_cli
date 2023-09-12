// import Vue from 'vue'
import VueRouter from 'vue-router';

import MainPage from './components/pages/MainPage';
import BlogPage from './components/pages/BlogPage';
import BlogDetails from './components/blocks/BlogDetails';
import ProjectPage from './components/pages/ProjectPage';
import ProjectDetails from './components/blocks/ProjectDetails';
import NotFound from './components/pages/NotFound';

export default new VueRouter({
    routes: [
        {
            path: '',
            component: MainPage
        },
        {
            path: '/Project',
            component: ProjectPage
        },
        {
            path: '/Project/ProjectDetails/:id',
            component: ProjectDetails
        },
        {
            path: '/Blog',
            component: BlogPage
        },
        {
            path: '/Blog/:page',
            component: BlogPage
        },
        {
            path: '/Blog/BlogDetails/:id',
            component: BlogDetails
        },
        {
            path: '/NotFound',
            component: NotFound
        },
        {
            path: "*",
            component: NotFound
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: 'history',
})
