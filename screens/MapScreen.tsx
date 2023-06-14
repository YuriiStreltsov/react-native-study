import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { Location } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import IconButton from "../components/UI/IconButton";

type MapScreenProps = NativeStackScreenProps<RootStackParamList, "Map">;

function MapScreen({ navigation, route }: MapScreenProps) {
  const initialParams = route.params && {
    lat: route.params.location.lat,
    lng: route.params.location.lng,
    title: route.params.title,
  };

  const [selectedLocation, setSelectedLocation] =
    useState<Location>(initialParams);

  const region = {
    latitude: initialParams ? initialParams.lat : 46.6093278,
    longitude: initialParams ? initialParams.lng : 30.5780954,
    latitudeDelta: 0.02,
    longitudeDelta: 0.03,
  };

  function selectLocationHandler(event: MapPressEvent) {
    if (initialParams) {
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }
    navigation.navigate("AddPlace", selectedLocation);
  }, [selectedLocation, navigation]);

  useLayoutEffect(() => {
    if (initialParams) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler, initialParams]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapView}
        initialRegion={region}
        onPress={selectLocationHandler}
      >
        {selectedLocation && (
          <Marker
            title={initialParams ? initialParams.title : "Unknown location"}
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        )}
      </MapView>
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
});
