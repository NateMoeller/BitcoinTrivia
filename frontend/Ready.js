import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';

export default function Ready(props) {
    let timer = null;
    const fadeAnimReady = useRef(new Animated.Value(0)).current;
    const fadeAnimStarting = useRef(new Animated.Value(0)).current;
    const [time, setTime] = useState(3);

    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                fadeAnimReady,
                {
                  toValue: 1,
                  duration: 1000,
                }
            ),
            Animated.timing(
                fadeAnimStarting,
                {
                  toValue: 1,
                  duration: 500
                }
            )
        ]).start(({ finished }) => {
            if (finished) {
                timer = startTimer();
             }
        });

        return () => {
            clearInterval(timer);
          }
    }, [fadeAnimReady]);

    useEffect(() => {
        if (time === 0) {
            clearInterval(timer);
            props.setShowReady(false);
        }
    }, [time]);

    const startTimer = () => setInterval(countdown, 1000);
    const countdown = () => {
        setTime(prevTime => {
            const newTime = prevTime - 1;
            return newTime;
        })
    };

    return (
        <View style={styles.transitionContainer}>
            <Animated.View
                style={{
                    opacity: fadeAnimReady
                }}
            >
                <Text style={styles.readyText}>Ready?</Text>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnimStarting
                }}
            >
                <Text style={styles.startingInText}>Starting in...{time}</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    transitionContainer:{
      boxSizing: 'border-box'
    },
    readyText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '4rem',
        paddingTop: 20,
        paddingBottom: 20
    },
    startingInText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem'
    }
});