import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";
import { Place } from "../../model/place";
import { useNavigation } from "@react-navigation/native";

type PlacesListProps = {
  places?: Array<Place>;
};

function PlacesList({ places }: PlacesListProps) {
  const navigation = useNavigation();

  function selectPlaceHandler(placeId: number) {
    navigation.navigate("PlaceDetails", { placeId });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
  list: {
    marginHorizontal: 24,
  },
});
