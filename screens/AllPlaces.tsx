import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PlacesList from "../components/Places/PlacesList";
import { RootStackParamList } from "../App";
import { useIsFocused } from "@react-navigation/native";
import { Place } from "../model/place";

type AllPlacesProps = NativeStackScreenProps<RootStackParamList, "AllPlaces">;

function AllPlaces({ route }: AllPlacesProps) {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currPlaces) => [...currPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
