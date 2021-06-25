import React, { useState } from 'react';
import Welcome from './Welcome';
import SingleGame from './SingleGame';
import { View, StyleSheet } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState(0);


  const getContent = () => {
    if (screen === 0) {
      return <Welcome playSingleGame={() => setScreen(1)} />;
    } else if (screen === 1) {
      return <SingleGame />
    }

    return '';
  }

  return (
    <View style={styles.container}>
        {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    width: '100%',
    maxWidth: 500
  }
});
