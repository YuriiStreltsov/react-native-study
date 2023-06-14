import { NativeStackScreenProps } from "@react-navigation/native-stack";
import PlaceForm from "../components/Places/PlaceForm";
import { RootStackParamList } from "../App";
import { Place } from "../model/place";
import { insertPlace } from "../utils/database";

type AddPlaceProps = NativeStackScreenProps<RootStackParamList, "AddPlace">;

function AddPlace({ navigation }: AddPlaceProps) {
  async function createPlaceHandler(place: Place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
export default AddPlace;
