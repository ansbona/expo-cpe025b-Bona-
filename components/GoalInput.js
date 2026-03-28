// components/GoalInput.js
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function GoalInput(props) {
  // Move the state for the input text HERE
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Create a local add handler to clear text and pass data to the parent (App.js)
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // Clear input after adding
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder="Enter a new course goal..." 
        placeholderTextColor="#888"
        onChangeText={goalInputHandler}
        value={enteredGoalText} 
      />
      <View style={styles.buttonWrapper}>
        <Button title="Add" onPress={addGoalHandler} color="#5e0acc" />
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d6',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRadius: 8,
    width: '75%',
    marginRight: 8,
    padding: 12,
    fontSize: 16,
  },
  buttonWrapper: {
    width: '22%',
  },
});