import * as SQLite from "expo-sqlite";
import { Place } from "../model/place";

const database = SQLite.openDatabase("places.db");

const createTableInstruction = `CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    imageUri TEXT NOT NULL,
    address TEXT NOT NULL,
    lat REAL NOT NULL,
    lng REAL NOT NULL
    )`;

const insertPlaceInstruction = `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`;
const fetchPlacesInstruction = `SELECT * FROM places`;
const fetchPlaceDetailsInstr = `SELECT * FROM places WHERE id = ?`;

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        createTableInstruction,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        insertPlaceInstruction,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        fetchPlacesInstruction,
        [],
        (_, result) => {
          const places = [];

          for (const dp of result.rows._array) {
            places.push(
              new Place({
                title: dp.title,
                imageUri: dp.imageUri,
                location: { address: dp.address, lat: dp.lat, lng: dp.lng },
                id: dp.id,
              })
            );
          }
          resolve(places);
        },
        (_, error) => reject(error)
      );
    });
  });

  return promise;
}

export function fetchPlaceDetails(placeId) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        fetchPlaceDetailsInstr,
        [placeId],
        (_, result) => {
          const dbPlace = result.rows._array[0];

          const place = new Place({
            title: dbPlace.title,
            imageUri: dbPlace.imageUri,
            location: {
              lat: dbPlace.lat,
              lng: dbPlace.lng,
              address: dbPlace.address,
            },
            id: dbPlace.id,
          });

          resolve(place);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
