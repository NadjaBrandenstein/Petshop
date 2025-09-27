import {useNavigate, useParams} from "react-router";
import {useAtom} from "jotai";
import { AllPetsAtoms } from "./Atoms.ts";
import {useEffect, useState} from "react";

export default function UpdatePet() {
    const {petId} = useParams();
    const [allPets, setAllPets] = useAtom(AllPetsAtoms);
    const navigate = useNavigate();

    const pet = petId ? allPets[petId] : null;

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [sold, setSold] = useState("false");

    useEffect(() => {
        if (pet) {
            setName(pet.name);
            setBreed(pet.breed);
            setImgurl(pet.imgurl);
            setSold(pet.sold);
        }
    }, [pet]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if(!petId) {return}

        try {
            const response = await fetch("https://api-divine-grass-2111.fly.dev/UpdatePet", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: petId,
                    name,
                    breed,
                    imgurl,
                    sold,
                }),
            });

            if (!response.ok) throw new Error("Failed to update pet");

            const updatedPet = await response.json();

            // update atom
            setAllPets(prev => ({
                ...prev,
                [updatedPet.id]: updatedPet,
            }));

            // go back to details or home
            navigate("/pets/" + updatedPet.id);
        } catch (err) {
            console.error(err);
            alert("Error updating pet");
        }
    }

    if(!pet){
        return <div className="newpet-container"><p>Pet not Found</p></div>
    }

    return (
        <div className="newpet-container">
            <h2>Update Pet</h2>
            <form onSubmit={handleSubmit} className="newpet-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="newpet-input"
                />
                <input
                    type="text"
                    placeholder="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                    className="newpet-input"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imgurl}
                    onChange={(e) => setImgurl(e.target.value)}
                    required
                    className="newpet-input"
                />
                <label className="flex items-center gap-4 mt-4">
                    <span>Sold?</span>
                    <input
                        type="checkbox"
                        checked={sold}
                        onChange={() => setSold(!sold)}
                        className="toggle-checkbox"
                    />
                </label>
                <button type="submit" className="newpet-button">
                    Update Pet
                </button>
            </form>
        </div>
    )

}