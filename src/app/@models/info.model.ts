export class Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;

    constructor(info: any) {
        this.count = info.count;
        this.pages = info.pages;
        this.next = info.next;
        this.prev = info.prev;
    }
}