import {AllPetsAtoms} from "./Atoms.ts";
import {useAtom} from "jotai";
import {useEffect} from "react";

export function initializeDataForApplication() {

    const [, setAllPets] = useAtom(AllPetsAtoms)

    useEffect(() => {
        fetch("https://api-divine-grass-2111.fly.dev/GetPets")
            .then(result => {
                result.json().then(allPets => {
                    const petsMap: Record<string, any> = {};
                    allPets.forEach((pet: any) => {
                        petsMap[pet.id] = pet;
                    })
                    setAllPets(petsMap)
                })
            })


    }, [])

}