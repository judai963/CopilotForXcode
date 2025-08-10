
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion, setScore, nextQuestion } from './redux/actions';
import { questions } from './data/questions.json';

const QuizScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);
  const score = useSelector((state) => state.score);

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    dispatch(setQuestion(questions[0]));
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      dispatch(setScore(score + 1));
    }
    dispatch(nextQuestion());
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, idx) => (
        <Button key={idx} title={option} onPress={() => handleAnswer(option)} />
      ))}
      <Text>Time Remaining: {timer}s</Text>
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
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default QuizScreen;
    