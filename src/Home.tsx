import { useNavigate } from "react-router";
import {useEffect, useState} from "react";
import { useAtom } from "jotai";
import { AllPetsAtoms } from "./Atoms";
import PetCard from "./PetCard.tsx";
import PetOverview from "./PetOverview.tsx";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [allPets, setAllPets] = useAtom(AllPetsAtoms);

    useEffect(() => {
        fetch("https://api-divine-grass-2111.fly.dev/GetPets")
            .then(res => res.json())
            .then(data => setAllPets(data))
            .catch(err => console.error(err));
    }, [setAllPets])

    return (

        <div className="relative bg-white text-black min-h-screen">
            {/* Navbar */}
            <div className="flex items-center justify-between p-4 border-b shadow">
                <button
                    className="text-2xl md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <h1 className="text-xl font-bold flex-grow text-center md:text-left">
                    Pet Shop
                </h1>

                {menuOpen && (
                    <div className="absolute top-14 left-0 bg-gray-700 text-white rounded-b z-50">
                        <div
                            className="p-2 hover:bg-gray-600 cursor-pointer"
                            onClick={() => navigate("/pets")}
                        >
                            Pets
                        </div>
                        <div
                            className="p-2 hover:bg-gray-600 cursor-pointer"
                            onClick={() => navigate("/newpet")}
                        >
                            New Pet
                        </div>
                        <div
                            className="p-2 hover:bg-gray-600 cursor-pointer"
                            onClick={() => navigate("/updatepet")}
                        >
                            Update Pet
                        </div>
                    </div>
                )}
            </div>

            <div className="p-6 min-h-screen bg-gray-50">
                <PetOverview />
            </div>
        </div>
    );
}
