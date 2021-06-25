import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Pressable, ProgressBar } from 'react-native';

export default function SingleGame(props) {
    const NUM_MILLISECONDS = 1000;
    let timer = null;
    // Animations
    const fadeAnimQuestion = useRef(new Animated.Value(0)).current;
    const fadeAnimButtons = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                fadeAnimQuestion,
                {
                  toValue: 1,
                  duration: 1000,
                  delay: 1000
                }
            ),
            Animated.timing(
                fadeAnimButtons,
                {
                  toValue: 1,
                  duration: 500
                }
            )
        ]).start(({ finished }) => {
            if (finished) {
                timer = props.startTimer(NUM_MILLISECONDS);
            }
        });

        return () => {
            clearInterval(timer);
        }
        
    }, [fadeAnimQuestion, props.question.id]);

    const msToSec = (time) => (time / 100).toFixed(2);
    const calcProgress = () => props.time / NUM_MILLISECONDS;

    const onClickAnswer = (index) => {
        Animated.timing(fadeAnimButtons).reset();
        props.onClickAnswer(index);
    }

    return (
        <View style={styles.questionContainer}>
            <View>
                <Text style={styles.timerText}>{msToSec(props.time)}</Text>
                <ProgressBar
                    color="rgb(121, 75, 196)"
                    progress={calcProgress()}
                    trackColor="rgba(121, 75, 196, 0.3)"
                />
            </View>
            <Animated.View
                style={{
                    opacity: fadeAnimQuestion
                }}
            >
                <Text style={styles.question}>{props.question.question}</Text>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnimButtons
                }}
            >
                <Pressable style={styles.button} onPress={() => onClickAnswer(0)}>
                    <Text style={styles.buttonText}>{props.question.answers[0]}</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => onClickAnswer(1)}>
                    <Text style={styles.buttonText}>{props.question.answers[1]}</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => onClickAnswer(2)}>
                    <Text style={styles.buttonText}>{props.question.answers[2]}</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => onClickAnswer(3)}>
                    <Text style={styles.buttonText}>{props.question.answers[3]}</Text>
                </Pressable>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    questionContainer:{
      boxSizing: 'border-box'
    },
    timerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        marginBottom: 40,
        marginTop: 40
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
        color: 'white',
        cursor: 'pointer',
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});