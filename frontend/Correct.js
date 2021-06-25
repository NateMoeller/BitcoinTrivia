import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export default function Correct(props) {
    return (
        <View style={styles.correctContainer}>
            <Text style={styles.correctText}>That's Correct</Text>
            <Pressable style={styles.button} onPress={props.nextQuestion}>
                <Text style={styles.buttonText}>Next question</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    correctContainer:{
        boxSizing: 'border-box'
    },
    correctText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '3rem',
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