import {AllPetsAtoms} from "./Atoms.ts";
import {useAtom} from "jotai";
import {useNavigate} from "react-router";
import {useState} from "react";

export default function NewPet() {

    const [, setAllPets] = useAtom(AllPetsAtoms)
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const[imgurl, setImgurl] = useState("")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const response = await fetch("https://api-divine-grass-2111.fly.dev/CreatePet", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name,
                    breed,
                    imgurl,
                })
            })

            if(!response.ok) {
                throw new Error("Failed to create Pet");
            }

            const newPet = await response.json();

            setAllPets(prev => ({
                ...prev,
                [newPet.id]: newPet,
            }));

            navigate("/");

        }
        catch(err){
            console.error(err);
            alert("Error creating new pet");
        }


    }

    return (
        <div className="newpet-container">
            <h2>Add new Pet</h2>
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
                    placeholder="Breed"
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
                <button type="submit" className="newpet-button"> Create Pet</button>

            </form>
        </div>
    )


}