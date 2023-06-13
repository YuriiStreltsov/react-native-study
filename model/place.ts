import { Location } from "../types";

interface IPlace {
  title: string;
  imageUri: string;
  location: Location;
}

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id: string;
  constructor({ title, imageUri, location }: IPlace) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
