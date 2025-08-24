import {useAtom} from "jotai";
import {useNavigate} from "react-router";
import {AllPetsAtoms} from "./Atoms.ts";
import PetCard from "./PetCard.tsx";

export default function PetOverview() {

    const [allPets] = useAtom(AllPetsAtoms)
    const navigate = useNavigate();

    return <div>
        <h1 className="text-2xl font-bold mb-6">Available Pets</h1>
        {
            allPets.map(pet => {
                return <div key={pet.id}>
                    <button onClick={() => {
                        navigate("/pets/" + pet.id);
                    }}>{pet.name}</button>
                </div>
            })
        }
    </div>

}