import test from 'ava';
import { spy, stub } from 'sinon';
import reducer, { CREATE_DEPOSIT, CREATE_WITHDRAWL, DEPOSIT, createTransaction } from './transactions';

test('the createTransaction action creator dispatches the correct action', t => {
  const dispatch = spy();
  const getState = stub().returns({ transactions: [{ endBalance: 1.00 }] });

  createTransaction({
    type: DEPOSIT,
    amount: '7.75',
    description: 'test transaction',
  })(dispatch, getState);

  const createdAction = dispatch.getCall(0).args[0];

  t.is(createdAction.transaction.amount, 7.75);
  t.is(createdAction.transaction.endBalance, 8.75);
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
      type: CREATE_DEPOSIT,
      transaction: testTransaction,
    },
    result: [testTransaction],
  },
  {
    state: [],
    action: {
      type: CREATE_WITHDRAWL,
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
