
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.tsx";
import PetDetails from "./PetDetails.tsx";
import NewPet from "./NewPet.tsx";
import UpdatePet from "./UpdatePet.tsx";
import Layout from "./Layout.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />, // Layout wraps all pages
            children: [
                { path: "/", element: <Home /> },
                { path: "/pets/:petId", element: <PetDetails /> },
                { path: "/newpet", element: <NewPet /> },
                { path: "/updatepet/:petId", element: <UpdatePet /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App
