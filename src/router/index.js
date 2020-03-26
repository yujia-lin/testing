import Vue from 'vue'
import Router from 'vue-router'
import testing from '@/components/testing'
import trend from '@/components//trend'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass:"navAct",
	routerLinkExactActive:"navAct",
	routes: [
	{
	      path: '/',
	      redirect:"/testing",
	      component: testing
	    },
	    {
	      path: '/trend',
	      component: trend,
	    },
	    {
	      path: '/testing',
	      component: testing
	    }
	]
})
