export interface Group {
    id: number; // not sure should this reference to existing one on can be new one
    name: string;
    details: string;
    // tslint:disable-next-line:max-line-length
    persons: string[]; // do not understand why does this exist, because person has an reference to groups, so here group again referencing to person
}
