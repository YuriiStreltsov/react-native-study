import {
    Alert,
    FlatList,
    StyleSheet,
    useWindowDimensions,
    View,
} from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import GuessLogItem from '../components/game/GuessLogItem';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Ionicons from '@expo/vector-icons/Ionicons';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", 'You know that is wrong...', [
                { text: 'Sorry', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newRndNumber]);
    }

    const guessRoundListLength = guessRounds.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsWrapperContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('lower')}
                        >
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('higher')}
                        >
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('lower')}
                        >
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('higher')}
                        >
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsWrapperContainer: {
        flexDirection: 'row',
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});