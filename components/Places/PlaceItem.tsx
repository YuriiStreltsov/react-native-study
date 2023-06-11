import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Place } from './places-types';

interface IPlaseItemProps {
    place: Place;
    onSelect: () => void;
}

function PlaceItem({ place, onSelect }: IPlaseItemProps) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    );
}

export default PlaceItem;

const styles = StyleSheet.create({});
