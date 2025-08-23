import {useParams} from "react-router";
import {AllPetsAtoms} from "./Atoms.ts";
import {useAtom} from "jotai";

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
    const { petId } = useParams<PetIdParameter>();
    const [allPets] = useAtom(AllPetsAtoms);

    const pet = allPets.find(p => p.id === petId);

    if (!pet) return <div>Pet not found!</div>;

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-md">
            <img src={pet.imgurl} alt={pet.name} className="w-full h-64 object-cover rounded-md"/>
            <h1 className="text-2xl font-bold mt-4">{pet.name}</h1>
            <p className="text-gray-700 mt-2">Breed: {pet.breed}</p>
            <p className="text-gray-700 mt-1">Status: {pet.sold ? "Sold" : "Available"}</p>
        </div>
    );

}