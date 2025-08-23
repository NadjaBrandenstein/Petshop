import {useAtom} from "jotai";
import {useNavigate} from "react-router";
import {AllPetsAtoms} from "./Atoms.ts";
import PetCard from "./PetCard.tsx";

export default function PetOverview() {

    const [allPets] = useAtom(AllPetsAtoms)
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Available Pets</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allPets.map(pet => (
                    <PetCard
                        key={pet.id}
                        name={pet.name}
                        imgurl={pet.imgurl}
                        onClick={() => navigate(`/pets/${pet.id}`)}
                    />
                ))}
            </div>
        </div>
    );

}