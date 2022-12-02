export class Question {
    enonce: string;
    reponses: string[];
    bonneReponse: number;
    description: string;

    public constructor(enonce: string, reponses: string[], bonneReponse: number, description: string) {
        this.enonce = enonce;
        this.reponses = reponses;
        this.bonneReponse = bonneReponse;
        this.description = description;
    }
}