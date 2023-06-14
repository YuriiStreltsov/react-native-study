import { Location } from "../types";

interface IPlace {
  title: string;
  imageUri: string;
  location: Location;
  id?: number;
}

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id: number;
  constructor({ title, imageUri, location, id }: IPlace) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = id;
  }
}
