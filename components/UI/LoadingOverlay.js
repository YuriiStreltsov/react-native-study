import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function LoadingOverlay({ style }) {
    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size="large" color="white" />
        </View>
    );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700,
    },
});
