
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from './redux/actions';

const ResultsScreen = ({ navigation }) => {
  const score = useSelector((state) => state.score);

  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(resetGame());
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Your Score: {score}</Text>
      <Button title="Restart Quiz" onPress={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ResultsScreen;
    