
import {initializeDataForApplication} from "./initializeDataForApplication.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.tsx";
import PetDetails from "./PetDetails.tsx";
import NewPet from "./NewPet.tsx";
import UpdatePet from "./UpdatePet.tsx";

function App() {

    //initializeDataForApplication()

    return (
        <>
            {/*<Navbar />*/}
            <RouterProvider router={createBrowserRouter([
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/pets/:petId",
                    element: <PetDetails/>
                },
                {
                    path: "/newpet",
                    element: <NewPet/>
                },
                {
                    path: "/updatepet/:petId",
                    element: <UpdatePet/>
                }
            ])}/>
        </>
    )
}

export default App
