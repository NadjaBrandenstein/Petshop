import {useParams} from "react-router";
import {AllPetsAtoms, fetchPetById} from "./Atoms.ts";
import {useAtom} from "jotai";
import {useEffect, useState} from "react";

export type PetIdParameter = {
    petId: string;
}

export interface Pet{
    id: string;
    name: string;
    breed: string;
    imgurl: string;
    sold: boolean;
}

export default function PetDetails() {
    const params = useParams();
    const petId = params.petId ?? null;
    const [allPets, setAllPets] = useAtom(AllPetsAtoms);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!petId) return;

        async function loadPet() {
            if (allPets[petId]) {
                setLoading(false);
                return;
            }
            await fetchPetById(petId, allPets, setAllPets);
            setLoading(false);
        }

        loadPet();
    }, [petId, allPets, setAllPets]);

    const pet = petId ? allPets[petId] : null;

    if(loading) return <div>Loading...</div>;
    if(!pet) return <div>Pet not found!</div>;


    return (
        <div className="pet-details">
            <h2>{pet.name ?? "Loading..."}</h2>
            <img
                src={pet.imgurl}
                alt={pet.name}
                className="pet-details-image"
            />
            <p><strong>Breed: </strong>{pet.breed}</p>
            <p><strong>Status: </strong>{pet.sold}</p>

        </div>
    )

}