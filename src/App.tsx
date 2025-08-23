
//import './App.css'

import {initializeDataForApplication} from "./initializeDataForApplication.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.tsx";
import PetDetails from "./PetDetails.tsx";
import PetOverview from "./PetOverview.tsx";

function App() {

    //initializeDataForApplication()

    return (
        <>
            {/*<Navbar />*/}
            <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    element: <Home/>,
                    children: [
                        {
                            path: "/pets",
                            element: <PetOverview/>
                        },
                        {
                            path: "/pets/:petsId",
                            element: <PetDetails/>
                        }
                    ]
                }
            ])}/>
        </>
    )
}

export default App
