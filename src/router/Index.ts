import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        redirect: "/workplace",
    },
    {
        path: "/workplace",
        name: "Workplace",
        component: (): any => import("../views/index/TheWorkPlace.vue"),
        children: [
            {
                path: "studentManagment",
                name: "TheStudentManagment",
                component: (): any => import("../views/index/components/TheStudentManagment.vue"),
            },
            {
                path: "studentView",
                name: "TheStudentView",
                component: (): any => import("../views/index/components/TheStudentView.vue"),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory("/student/"),
    routes,
});
// 路由守卫
router.beforeEach((to, from, next) => {
    next();
});
export default router;