import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home/Home.vue'
import AddTask from '../components/TaskOperations/AddTask.vue'
import EditTask from '../components/TaskOperations/EditTask.vue'
import Settings from '../components/TaskOperations/Settings.vue'


const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {
            title: '任务列表 - 任务管理工具'
        }
    },
    {
        name: 'add_task',
        path: '/tasks/add',
        component: AddTask,
        meta: {
            title: '添加任务 - 任务管理工具'
        }
    },
    {
        name: 'edit_task',
        path: '/tasks/edit/:id',
        component: EditTask,
        meta: {
            title: '编辑任务 - 任务管理工具'
        }
    },
    {
        name: 'settings',
        path: '/settings',
        component: Settings,
        meta: {
            title: '设置 - 任务管理工具'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

router.afterEach(to => {
    document.title = to.meta.title
})

export default router