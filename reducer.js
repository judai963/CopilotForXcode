
const initialState = {
  score: 0,
  currentQuestionIndex: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTION':
      return { ...state, currentQuestion: action.payload };
    case 'SET_SCORE':
      return { ...state, score: action.payload };
    case 'NEXT_QUESTION':
      const nextIndex = state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        currentQuestion: questions[nextIndex],
      };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

export default quizReducer;
    