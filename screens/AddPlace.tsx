import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PlaceForm from "../components/Places/PlaceForm";
import { RootStackParamList } from "../App";
import { Place } from "../model/place";

type AddPlaceProps = NativeStackScreenProps<RootStackParamList, "AddPlace">;

function AddPlace({ navigation }: AddPlaceProps) {
  function createPlaceHandler(place: Place) {
    navigation.navigate("AllPlaces", { place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
export default AddPlace;
