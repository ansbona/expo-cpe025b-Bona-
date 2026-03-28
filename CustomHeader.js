import { StyleSheet, Text, View } from 'react-native';

function CustomHeader(props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e6e6fa', // Light purple background
    borderRadius: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5e0acc',
  },
});