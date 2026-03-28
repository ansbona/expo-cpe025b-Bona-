import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      {/* props.text to receive data from App.js */}
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, 
  },
  goalText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  }
});