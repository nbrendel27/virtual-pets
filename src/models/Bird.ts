import VirtualPet from "./VirtualPet";

export default class Bird extends VirtualPet {
    altitude: number;

    constructor(name: string, altitude: number) {
        super(name);
        this.altitude = altitude;
    }

    flyHigher() {
        this.altitude += 100;
    }
}