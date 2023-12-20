import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

// Redux: Action Types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Redux: Action Creators
const addTodo = (text, category, dueDate) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), text, category, dueDate, completed: false },
});

const removeTodo = (id) => ({ type: REMOVE_TODO, payload: { id } });

const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: { id } });

// Redux: Reducer
const initialState = { todos: [] };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.payload.id) };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

// Redux: Store
const store = createStore(todoReducer);

// Task Component
const Task = ({ task, onPress }) => (
  <TouchableOpacity style={styles.taskItem} onPress={onPress}>
    <Text style={task.completed ? { textDecorationLine: 'line-through' } : {}}>{task.text}</Text>
  </TouchableOpacity>
);

// Category Selector Component
const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => (
  <View style={styles.categorySelector}>
    {categories.map(category => (
      <TouchableOpacity
        key={category}
        style={[styles.categoryButton, category === selectedCategory && styles.selectedCategory]}
        onPress={() => onSelectCategory(category)}
      >
        <Text>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

// App Component
const App = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Work', 'Personal', 'Shopping'];

  const filteredTodos = selectedCategory === 'All'
    ? todos
    : todos.filter(todo => todo.category === selectedCategory);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo, selectedCategory, new Date().toISOString()));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            task={item}
            onPress={() => handleToggleTodo(item.id)}
          />
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a new to-do"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
    </View>
  );
};

// Stats Component
const Stats = () => {
  const todos = useSelector(state => state.todos);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <Text>Total Tasks: {todos.length}</Text>
      <Text>Completed Tasks: {completedTodos.length}</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={App} />
          <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categorySelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCategory: {
    backgroundColor: '#e0e0e0',
  },
});
