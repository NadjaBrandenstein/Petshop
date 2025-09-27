import {useNavigate} from "react-router";
import {useEffect} from "react";
import {useAtom} from "jotai";
import {AllPetsAtoms} from "./Atoms.ts";
import type {Pet} from "./PetDetails.tsx";

export default function Home() {
    const navigate = useNavigate();
    const [allPets, setAllPets] = useAtom(AllPetsAtoms)

    useEffect(() => {
        async function fetchAllPets() {
            try {
                const res = await fetch("https://api-divine-grass-2111.fly.dev/GetPets");
                const data: Pet[] = await res.json();

                // Convert array to object keyed by ID
                const petsById: Record<string, Pet> = {};
                data.forEach(pet => {
                    petsById[pet.id] = pet;
                });

                setAllPets(petsById); // store in atom
            } catch (err) {
                console.error(err);
            }
        }
        fetchAllPets();
    }, [setAllPets]);

    return (
        <div>
            <h2 className="heading">Available Pets</h2>

            <div>
                {Object.values(allPets).map((pet) => (
                    <div
                        key={pet.id}
                        className="pet-card"
                        onClick={() => navigate("/pets/" + pet.id)}
                    >
                        <img src={pet.imgurl} alt={pet.name} className="pet-image" />
                        <h2 className="text-lg font-bold mt-2">{pet.name}</h2>

                    </div>
                ))}
            </div>
        </div>
    );

}
