import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </>
  );
}

export default App;
