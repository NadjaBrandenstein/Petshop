import { useNavigate } from "react-router";
import { useState } from "react";
import { useAtom } from "jotai";
import { AllPetsAtoms } from "./Atoms";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [allPets] = useAtom(AllPetsAtoms);

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

            {/* Pet Cards Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allPets.map((pet) => (
                    <div
                        key={pet.id}
                        className="bg-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition flex flex-col items-center"
                        onClick={() => navigate(`/pets/${pet.id}`)}
                    >
                        <h2 className="text-lg font-semibold text-center mt-2 ">{pet.name}</h2>

                        <div className="h-32 w-32 mt-2 overflow-hidden rounded-md">
                            <img
                                src={pet.imgurl}
                                alt={pet.name}
                                className="object-cover w-full h-full"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
