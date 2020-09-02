
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', exact: true, component: () => import('pages/Monitor.vue') },
      { path: 'monitor', exact: true, component: () => import('pages/Monitor.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'setting', component: () => import('pages/Setting.vue') },
      { path: 'log', component: () => import('pages/Log.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
