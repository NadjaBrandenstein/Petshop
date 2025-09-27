import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {AllPetsAtoms} from "./Atoms.ts";
import {useNavigate} from "react-router";

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

    const { petId } = useParams<{ petId: string }>();
    const [allPets] = useAtom(AllPetsAtoms);
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!petId) {
            setLoading(false);
            return;
        }

        if (allPets[petId]) {
            setPet(allPets[petId]);
            setLoading(false);
        } else {
            // fallback: fetch by ID
            async function fetchPet() {
                try {
                    const response = await fetch(
                        `https://api-divine-grass-2111.fly.dev/GetPetById?id=${petId}`
                    );
                    if (!response.ok) throw new Error("Failed to fetch pet");

                    const data: Pet = await response.json();
                    setPet(data);
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            }
            fetchPet();
        }
    }, [petId, allPets]);

    if(loading) return <p>Loading...</p>;
    if(!pet) return <p>Pet not found</p>;

    return (
        <div className="pet-details">
            <h2 className="pet-name">{pet.name}</h2>
            <img src={pet.imgurl} alt={pet.name} className="pet-details-image"/>
            <p>
                <strong>Breed:</strong> {pet.breed}
            </p>
            <p>
                <strong>Status:</strong> {pet.sold ? "Sold" : "Available"}
            </p>
            <button
                onClick={() => navigate(`/updatepet/${pet.id}`)}
                className="newpet-button"
            > Update Pet
            </button>
        </div>
    )

}