import test from 'ava';
import { spy, stub } from 'sinon';
import reducer, { CREATE_TRANSACTION, createTransaction } from './transactions';

test('the createTransaction action creator dispatches the correct action', t => {
  const dispatch = spy();
  const getState = stub().returns({ transactions: [] });

  createTransaction('test transaction', '7.75')(dispatch, getState);

  t.is(dispatch.getCall(0).args[0].transaction.amount, 7.75);
});

const testTransaction = {
  amount: 10.50,
  description: 'test transaction',
  date: Date.now(),
  endBalance: 10.50,
};

const reducerTestCases = [
  {
    state: undefined,
    action: {},
    result: [],
  },
  {
    state: [],
    action: {
      type: CREATE_TRANSACTION,
      transaction: testTransaction,
    },
    result: [testTransaction],
  },
];

reducerTestCases.forEach(testCase => {
  test(`the transactions reducer handles the ${testCase.action.type || '@@INIT'} action`, t => {
    const state = reducer(testCase.state, testCase.action);
    t.deepEqual(state, testCase.result);
  });
});
