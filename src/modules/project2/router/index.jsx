import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

const router = createBrowserRouter([
    {
        index: true,
        element: <Home />
    },
    {
        path: 'about',
        element: <About />,
    }
])

export default router
