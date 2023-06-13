import { Location } from "../types";

interface IPlace {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
}

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: Location;
  id: string;
  constructor({ title, imageUri, address, location }: IPlace) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
