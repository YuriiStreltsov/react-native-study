import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { Place } from "../model/place";
import { fetchPlaces } from "../utils/database";

function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
