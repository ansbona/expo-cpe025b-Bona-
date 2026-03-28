import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  // This now expects to receive the text from the GoalInput component
  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>CPE025B Goal Tracker</Text>
      </View>

      {/* Passing the addGoalHandler down as a prop called onAddGoal */}
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <Text style={styles.listHeader}>My Goals:</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f8',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  goalsContainer: {
    flex: 5,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  }
});