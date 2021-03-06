import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Login from "@/pages/Login.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    beforeEnter: (to, from, next) => {
      console.log('[router] store.getters.getCurrentPath: ', store.getters.getCurrentPath );
      console.log('[router] store.getters.getIsLogin: ', store.getters.getIsLogin );

      if (!store.getters.getIsLogin) {
        next("/login");
      }
      next();  // next 는 redirect: "/dashboard"
      // next(store.getters.getCurrentPath);
    },
    redirect: "/dashboard",
    meta: { auth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
        meta: { minUserLevel : 5 }
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
        meta: { minUserLevel : 5 }
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
        meta: { minUserLevel : 5 }
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
        meta: { minUserLevel : 9 }
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
