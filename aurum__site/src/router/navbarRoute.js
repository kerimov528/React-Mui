import { lazy } from 'react'

const NavbarRoutes = [
    {
        component: lazy(() => import('../modules/Home/Home')),
        path: '/ana-səhifə'
    },
    {
        component: lazy(() => import('../modules/About/About')),
        path: '/haqqımızda'
    },
    {
        component: lazy(() => import('../modules/Services/Services')),
        path: '/xidmətlər'
    },
    {
        component: lazy(() => import('../modules/Ships/Ships')),
        path: '/gəmilər'
    },
    {
        component: lazy(() => import('../modules/Career/Career')),
        path: '/karyera'
    },
    {
        component: lazy(() => import('../modules/Galery/Galery')),
        path: '/qalereya'
    },
    {
        component: lazy(() => import('../modules/Contact/Contact')),
        path: '/əlaqə'
    }
]

export default NavbarRoutes