
export const setQuestion = (question) => ({
  type: 'SET_QUESTION',
  payload: question,
});

export const setScore = (score) => ({
  type: 'SET_SCORE',
  payload: score,
});

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION',
});

export const resetGame = () => ({
  type: 'RESET_GAME',
});
    