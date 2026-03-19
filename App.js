import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first mobile application!!!</Text>
      <Text>made by: Andrei Nycole So Bona</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b932c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
