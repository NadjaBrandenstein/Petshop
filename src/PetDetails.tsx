import {useParams} from "react-router";

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

    const {petId} = useParams<PetIdParameter>();
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!petId) {return}

        async function fetchPet() {
            try {
                const response = await fetch ('https://api-divine-grass-2111.fly.dev/GetPetById?id=${petId}')

                if(!response.ok) {throw new Error("Failed to fetch Pet");}

                const data: Pet = await response.json();
                setPet(data);
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchPet();

    }, [petId]);

    if(loading) return <p>Loading...</p>;
    if(!pet) return <p>Pet not found</p>;

    return (
        <div className="pet-details">
            <h2>{pet.name}</h2>
            <img src={pet.imgurl} alt={pet.name} className="pet-details-img"/>
            <p>
                <strong>Breed:</strong> {pet.breed}
            </p>
            <p>
                <strong>Status:</strong> {pet.sold ? "Sold" : "Available"}
            </p>
        </div>
    )

}