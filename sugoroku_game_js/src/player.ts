export class Player {
    name: string;
    color: string;
    position: number;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
        this.position = 0;
    }
}