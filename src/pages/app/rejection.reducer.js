import cuid from 'cuid';
const SET_USERNAME = "REJECTION/SET_USERNAME";
const ADD_ASK = "REJECTION/ADD_ASK";

const defaultState = {
  user: {
    username: "Anon"
  },
  questions: []
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERNAME: return Object.assign({}, state, payload);
    case ADD_ASK: return Object.assign({},
      state,
      { questions: state.questions.concat([payload])}
    );
    default: return state;
  }
};

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: { user: {
    username
  }}
});

export const addAsk = ({
  id = cuid(),
  askee = "Anon",
  question = "No question",
  answer = "Unanswered"
}) => ({
  type: ADD_ASK,
  payload: {
    id,
    askee,
    question,
    answer
  }
});
