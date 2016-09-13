import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import App from './App'


Vue.use(VueResource);
Vue.use(VueRouter);

// 创建一个路由器实例
const router = new VueRouter();

//开启debug模式
Vue.config.debug = true;


router.map({

  '/index': {
    name: 'index',
    component: function (resolve) {
      require(['./components/index'], resolve)
    },
    subRoutes: {
      '/sub': {
        name: 'sub',
        component: function (resolve) {
          require(['./components/Hello'], resolve)
        }
      }
    }
  },

  '/category': {
    name: 'category',
    component: function (resolve) {
      require(['./components/category'], resolve)
    }

  },
  '/categoryDetail/:id': {
    name: 'categoryDetail',
    component: function (resolve) {
      require(['./components/category-detail'], resolve)
    }
  }


});

router.redirect({
  '*': "/index"
});

// 全局的前置钩子函数，这个函数会在路由切换开始时调用
// router.beforeEach(function (transition) {
//   if (transition.to.auth) {
//
//     //判断是否登录，（可以通过接口，Vuex状态 token）
//     //没有登录走下面逻辑
//     var redirect = encodeURIComponent(transition.to.path);
//     //redirect 作为参数，登录之后跳转回来
//     transition.redirect('/logon?redirect=' + redirect);
//     // 对用户身份进行验证...
//     console.log("对用户身份进行验证...",transition);
//
//   }else{
//
//     transition.next();
//
//   }
// });

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');


/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })



