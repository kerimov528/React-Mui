import { lazy } from 'react'

const MainRoute = [
    {
        component: lazy(() => import('../modules/Home/Home')),
        path: '/'
    },
    {
        component: lazy(() => import('../modules/NotFound/NotFound')),
        path: '*'
    }
]

export default MainRoute