import {Outlet, useNavigate} from "react-router";
import {useState} from "react";
import {useAtom} from "jotai";
import {AllPetsAtoms} from "./Atoms.ts";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [allPets] = useAtom(AllPetsAtoms)

    return <div>

        <div className="navbar">
            Nav bar:

            <button
                className="text-2xl md:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            {menuOpen && (
                <div >
                    <div
                        onClick={() => navigate("/pets")}
                    >
                        Pets
                    </div>
                    <div
                        onClick={() => navigate("/newpet")}
                    >
                        New Pet
                    </div>
                    <div
                        onClick={() => navigate("/updatepet")}
                    >
                        Update Pet
                    </div>
                </div>
            )}
            <h1 className="text-xl font-bold flex-grow text-center md:text-left">
                Pet Shop
            </h1>

            <Outlet></Outlet>

        </div>
            <div>
                <h1 className="text-2xl font-bold mb-6">Available Pets</h1>

                <div>
                    {Object.values(allPets).map(pet => (
                        <div
                            key={pet.id}
                            className="pet-card"
                            onClick={() => navigate("/pets/" + pet.id)}
                        >
                            <img
                                src={pet.imgurl}
                                alt={pet.name}
                                className="pet-image"
                            />
                            <h2 className="text-lg font-bold mt-2">{pet.name}</h2>
                            <p className="text-sm text-gray-600">{pet.breed}</p>
                            <p className="text-sm">
                                {pet.sold ? "Sold" : "Available"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        <br/>
        <hr/>
    </div>

}
