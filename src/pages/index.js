import { createBrowserRouter } from "react-router-dom";
import IndexLayout from '../Layouts/IndexLayout'
import Index from './Index/Index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout/>,
        children: [
            { path: '/', element: <Index/> }
        ]
    }
])