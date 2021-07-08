import { Origin } from "./origin.model";

export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;

    constructor(character: any) {
        this.id = character.id;
        this.name = character.name;
        this.status = character.status;
        this.species = character.species;
        this.type = character.type;
        this.gender = character.gender;
        this.origin = new Origin(character.origin);
        this.location = new Origin(character.origin);
        this.image = character.image;
        this.episode = character.episode || [];
        this.url = character.url;
        this.created = character.created;
    }
} 