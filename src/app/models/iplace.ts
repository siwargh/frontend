import { Geoposition } from './igeopostion';


export interface Place {
    adresse1?: string;
    adresse2?: string;
    city: string;
    zipcode: string;
   geoposition: Geoposition;
}
