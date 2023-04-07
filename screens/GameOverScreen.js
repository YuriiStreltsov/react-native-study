import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Sizes from '../constants/sizes';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 420) {
        imageSize = 150;
    }

    if (height < 420) {
        console.log(height);
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/success.png')}
                    />
                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                        rounds to gues the number{' '}
                        <Text style={styles.highlight}>{userNumber}</Text>.
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}>
                        Start New Game
                    </PrimaryButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        padding: Sizes.whitespace.LARGE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderWidth: Sizes.border.WIDTH_MEDIUM,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: Sizes.whitespace.EXTRA_LARGE,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: Sizes.font.LARGE,
        textAlign: 'center',
        marginBottom: Sizes.whitespace.LARGE,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});
