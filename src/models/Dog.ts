import VirtualPet from "./VirtualPet";

export default class Dog extends VirtualPet {
    play (): void {
        this.happiness += 5;
        super.play()
    }
}