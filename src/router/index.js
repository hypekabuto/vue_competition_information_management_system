import Vue from 'vue'
import VueRouter from "vue-router";
import HomeView from "@/view/StuAndTea/home/homeView.vue";
import LogIn from "@/view/logIn.vue";
import userIndex from "@/view/StuAndTea/userIndex.vue";
import userCenterView from "@/view/userCenterView.vue";
import forumListView from "@/view/StuAndTea/forum/forumListView.vue"
import trainListView from "@/view/StuAndTea/train/trainListView.vue";
import competitionListView from "@/view/StuAndTea/competition/competitionListView.vue";
import competitionDetail from "@/view/StuAndTea/competition/competitionDetailView.vue";
import trainDetailView from "@/view/StuAndTea/train/trainDetailView.vue";
import forumDetailView from "@/view/StuAndTea/forum/forumDetailView.vue";
Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/logIn', // 确保这是您希望访问登录页面的路径
            name: 'logIn',
            component: LogIn
        },
        {
            path: '/',
            component: userIndex,
            children: [
                // 注意：子路由的路径不应该以 `/` 开头
                { path: 'home', name: 'homeView', component: HomeView },
                { path: 'userCenter', name: 'userCenter', component: userCenterView },
                { path: 'competitionList', name: 'competitionList', component: competitionListView },
                { path: 'competitionDetail', name: 'competitionDetail', component: competitionDetail },
                { path: 'forumList', name: 'forumList', component: forumListView },
                { path: 'forumDetail', name: 'forumDetail', component: forumDetailView },
                { path: 'trainList', name: 'trainList', component: trainListView },
                { path: 'trainDetail', name: 'trainDetail', component: trainDetailView },
                // 添加重定向到 homeView
                { path: '', redirect: 'home' }
            ]
        },
    ]
})