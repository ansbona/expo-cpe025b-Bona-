import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import CustomHeader from './components/CustomHeader'; // ILO2: New Custom Component

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

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
      
      {/* ILO2: Using the new custom component */}
      <CustomHeader title="CPE025B Tracker" />

      <GoalInput onAddGoal={addGoalHandler} />

      {/* ILO1: FlatList Demonstration with limited container size */}
      <Text style={styles.sectionTitle}>Optimized (FlatList):</Text>
      <View style={styles.limitedContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>

      {/* ILO1: ScrollView Demonstration with limited container size */}
      <Text style={styles.sectionTitle}>Unoptimized (ScrollView):</Text>
      <View style={styles.limitedContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <GoalItem key={goal.key} text={goal.text} />
          ))}
        </ScrollView>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  limitedContainer: {
    height: 150, // ILO1: Limiting the size of the container
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 15,
  }
});