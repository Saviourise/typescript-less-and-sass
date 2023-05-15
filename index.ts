interface Person {
    name: string;
    height: string;
    complexion: string;
    hobbies: string[];
    isMale: true | false;
    petObtained: "Cat" | "Dog" | "None";
}

const person: Person = {
    name: "Saviour",
    height: "6'2",
    complexion: "fair",
    hobbies: ["coding", "reading", "gaming"],
    isMale: true,
    petObtained: "Dog"
}

console.log(person.name)