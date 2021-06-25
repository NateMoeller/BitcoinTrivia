import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements'

export default function Transition(props) {
    const scaleAnimIcon = useRef(new Animated.Value(0)).current;
    const fadeAnimQuote = useRef(new Animated.Value(0)).current;
    const fadeAnimButton = useRef(new Animated.Value(0)).current;

    const phrase = props.correct ? 'That\'s correct' : 'That\'s incorrect';
    const quote = props.correct ? 'Nice, but that was an easy one' : '"If you don\'t believe me or don\'t get it, I don\'t have time to try to convince you, sorry" - Satoshi Nakamoto';
    const icon = props.correct ? 'check' : 'x';
    const iconColor = props.correct ? '#00e600' : '#ff0000';

    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                scaleAnimIcon,
                {
                  toValue: 1,
                  duration: 1000,
                }
            ),
            Animated.timing(
                fadeAnimQuote,
                {
                  toValue: 1,
                  duration: 1000,
                  delay: 1000
                }
            ),
            Animated.timing(
                fadeAnimButton,
                {
                  toValue: 1,
                  duration: 1000,
                  delay: 1000
                }
            )
        ]).start();
    }, [scaleAnimIcon]);

    return (
        <View style={styles.transitionContainer}>
            <Animated.View
                style={[
                    styles.transitionBox,
                    {
                        transform: [
                            {
                                scale: scaleAnimIcon
                            }
                        ]
                    }
                ]}
            >
                <Icon
                    name={icon}
                    type='feather'
                    color={iconColor}
                    size={128}
                />
                <Text style={styles.transitionText}>{phrase}</Text>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnimQuote
                }}
            >
                <Text style={styles.transitionMessage}>{quote}</Text>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnimButton
                }}
            >
                <Pressable style={styles.button} onPress={props.nextQuestion}>
                    <Text style={styles.buttonText}>Next question</Text>
                </Pressable>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    transitionContainer:{
        boxSizing: 'border-box'
    },
    transitionBox: {
        transform: 0.25
    },
    transitionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '3rem',
    },
    transitionMessage: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: 50
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
        marginTop: 50
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});