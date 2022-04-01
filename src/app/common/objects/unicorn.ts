export class Unicorn {
    name: string = "";
    color: string = "";
    gender: string = "";
    other: string = "";
    age: number = 0;
    mateUnicorn: boolean = false;

    constructor(name: string, color: string, gender: string, age: number, other?: string) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.age = age;
        this.other = other ?? "";
    }

    static equals(unicorn1: Unicorn, unicorn2 :Unicorn) : boolean {
        if(unicorn1.name == unicorn2.name &&
        unicorn1.color == unicorn2.color &&
        unicorn1.gender == unicorn2.gender &&
        unicorn1.age == unicorn2.age &&
        unicorn1.other == unicorn2.other &&
        unicorn1.mateUnicorn == unicorn2.mateUnicorn) {
            return true;
        } else {
            return false;
        }
    }
}