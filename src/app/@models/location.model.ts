export class Location {

    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;

    constructor(episode: any) {
        this.id = episode.id;
        this.name = episode.name;
        this.type = episode.type;
        this.dimension = episode.dimension;
        this.residents = episode.residents;
        this.url = episode.url;
        this.created = episode.created;
    }

}