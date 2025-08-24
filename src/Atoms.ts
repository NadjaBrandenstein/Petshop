import {atom} from "jotai";
import type {Pet} from "./PetDetails.tsx";

export const AllPetsAtoms = atom<Record<string, Pet>>({});

export async function fetchPetById(
    id: string,
    allPets: Record<string, Pet>,
    setAllPets: (pets: Record<string, Pet>) => void
) {
    const res = await fetch(`https://api-divine-grass-2111.fly.dev/GetPetById?id=${id}`);
    const pet: Pet = await res.json();

    setAllPets({ ...allPets, [pet.id]: pet });
}


