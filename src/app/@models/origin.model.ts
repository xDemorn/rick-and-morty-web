export class Origin {
    name: string;
    url: string;

    constructor(info: any) {
        this.name = info.name;
        this.url = info.url;
    }
}