import {useAtom} from "jotai";
import {useNavigate} from "react-router";
import {AllPetsAtoms} from "./Atoms.ts";

export default function PetOverview() {

    const [allPets, setAllPets] = useAtom(AllPetsAtoms)
    const navigate = useNavigate();

    return <div>


    </div>

}