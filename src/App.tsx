
import {initializeDataForApplication} from "./initializeDataForApplication.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.tsx";
import PetDetails from "./PetDetails.tsx";
import PetOverview from "./PetOverview.tsx";

function App() {

    initializeDataForApplication()

    return (
        <>
            {/*<Navbar />*/}
            <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    element: <Home/>
                },

                {
                    path: "/pets/:petsId",
                    element: <PetDetails/>
                }

            ])}/>
        </>
    )
}

export default App
