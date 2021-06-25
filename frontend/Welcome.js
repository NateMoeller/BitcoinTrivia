import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Welcome(props) {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>Bitcoin Trivia</Text>
      </View>
      <Text style={styles.text}>
        Bitcoin critics are dumb.
      </Text>
      <Text style={styles.text}>
        Test your knowledge of bitcoin by answering trivia questions against other players.
      </Text>
      <Button onPress={props.playSingleGame} title="Play" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header:{
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
    border: "1px soild green"
  }
});
