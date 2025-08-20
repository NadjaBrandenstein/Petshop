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

    const params = useParams<PetIdParameter>();
    const [allPets, setAllPets] = useAtom(AllPetsAtoms)
    const pet = allPets.find(p => p.id == params.petId);

    return <div>



    </div>;

}