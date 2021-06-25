import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export default function Gameover(props) {
    return (
        <View style={styles.gameoverContainer}>
            <Text style={styles.gameOver}>Game Over!</Text>
            <View>
                <Text style={styles.scoreText}>
                    {props.score} / {props.questions.length}
                </Text>
                <Pressable style={styles.button} onPress={() => console.log('play again')}>
                    <Text style={styles.buttonText}>Play Again</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gameoverContainer:{
        boxSizing: 'border-box'
    },
    gameOver: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2rem',
        marginBottom: 40,
        marginTop: 40
    },
    scoreText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '4rem'
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
    }
});