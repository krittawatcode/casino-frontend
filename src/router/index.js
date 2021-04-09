import CasinoDapp from '@/components/casino-dapp';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{ path: "/", name: "casino-dapp", component: CasinoDapp }]
});
