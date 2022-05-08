export default [
    {
        path: "/posts/create",
        name: "create post",
        component: () => import('./components/createArticle.vue'),
    },
    {
        path: "/",
        name: "last articles",
        component: () => import('./components/lastArticles.vue'),
    },
    {
        path: "/posts/:id",
        name: "article",
        component: () => import('./components/simpleArticle.vue'),
    },
    {
        path: "/posts/edit/:id",
        name: "editArticle",
        component: () => import('./components/editArticle.vue'),
    },
    {
        path: "/aboutFront",
        name: "aboutFront",
        component: () => import('./components/aboutFront.vue'),
    },
    {
        path: "/aboutBack",
        name: "aboutBack",
        component: () => import('./components/aboutBack.vue'),
    }
]