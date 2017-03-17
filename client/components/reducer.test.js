import test from 'tape';
import reducer, { setUsername, addAsk } from './rejection.reducer.js';

const getExpectedState = ({
  user = { username: "Anon" },
  questions = []
} = {}) => ({
  user,
  questions
});

test('Reducer with no args', (assert) => {
  const msg = "Should return default state";
  const actual = reducer();
  const expected = getExpectedState();

  assert.same(actual, expected, msg);

  assert.end();
});

test('Set username', (assert) => {
  const msg = "Should create a setUsername action";
  const action = setUsername("Donald");
  // action creator IS the public API for the reducer
  const actual = reducer(undefined, action);
  const expected = getExpectedState({ user: {username: "Donald"}});

  assert.same(actual, expected, msg);
  assert.end();
});

test('Add very first ask', (assert) => {
  const msg = "Should add a single ask";
  const ask = {
    id: 1,
    askee: "Batman",
    question: "Can I borrow the batmobile?",
    answer: "No"
  };
  const action = addAsk(ask);
  const actual = reducer(undefined, action);
  const expected = getExpectedState({questions: [ask]});

  assert.same(actual, expected, msg);
  assert.end();
});

test('Add a new ask', (assert) => {
  const msg = "Should add a subsequent ask";
  const asks = [
    {
      id: 1,
      askee: "Batman",
      question: "Can I borrow the batmobile?",
      answer: "No"
    },
    {
      id: 2,
      askee: "Joker",
      question: "Can I borrow your machine gun?",
      answer: "Yes"
    },
    {
      id: 3,
      askee: "Two Face",
      question: "Can we borrow your coin?",
      answer: "No"
    }
  ];
  const actions = asks.map(addAsk);
  const actual = actions.reduce(reducer, reducer());
  const expected = getExpectedState({
    questions: asks
  });

  assert.same(actual, expected, msg);
  assert.end();
});





