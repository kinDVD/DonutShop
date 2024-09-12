export interface DonutModel {
    count:   number;
    results: Result[];
}

export interface Result {
    id:                number;
    ref:               string;
    name:              string;
    photo:             string;
    photo_attribution: string;
    price: 1;
}

export interface DetailedDonut {
    id:                number;
    ref:               string;
    name:              string;
    calories:          number;
    extras:            string[];
    photo:             string;
    photo_attribution: string;
}