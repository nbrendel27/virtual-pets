import Cat from "./models/Cat";
import Dog from "./models/Dog";
import VirtualPet from "./models/VirtualPet";


export function decay (pet: VirtualPet): void {
    if(pet.hunger + 5 > 100) {
        pet.hunger = 100;
    }else {
        pet.hunger += 5;
    }

    if(pet.happiness - 5 < 0) {
        pet.happiness = 0;
    }else {
        pet.happiness -= 5;
    }
}

export function makePet(name: string, type: string): VirtualPet {
    if(type === "Dog") {
        return new Dog(name);
    }else if(type == "Cat") {
        return new Cat(name, "black");
    }
    return new VirtualPet(name);
}

export function findMostSatisfied(arrOfPets: VirtualPet[]) {
    return arrOfPets.reduce((acc, cv)=> acc.getSatisfaction() >= cv.getSatisfaction() ? acc : cv);
}