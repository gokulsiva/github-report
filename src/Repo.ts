export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    updatedAt: string;
    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.updatedAt = repo.updated_at;
    }
}