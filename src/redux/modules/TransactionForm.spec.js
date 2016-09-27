import test from 'ava';
import reducer, {
  validateField,
  validateForm,
  defaultState,
  SET_FIELD_VALUE,
  SET_ERRORS,
  CLEAR_FORM,
} from './TransactionForm';

const fieldValidationTestCases = [
  {
    args: ['type', ''],
    result: false,
  },
  {
    args: ['type', 'deposit'],
    result: true,
  },
  {
    args: ['amount', ''],
    result: false,
  },
  {
    args: ['amount', '101.1'],
    result: true,
  },
  {
    args: ['description', 'anything can go here'],
    result: true,
  },
];

fieldValidationTestCases.forEach(testCase => {
  test(`validateField correctly validates ${testCase.args}`, t => {
    t.is(testCase.result, validateField(...testCase.args));
  });
});

test('validateForm correctly validates serialized form object', t => {
  const serializedForm = {
    type: '',
    amount: '101.1',
    description: '',
  };

  const errors = validateForm(serializedForm);

  t.is(errors.type, true);
  t.is(errors.amount, undefined);
  t.is(errors.description, undefined);
});

const reducerTestCases = [
  {
    state: undefined,
    action: {},
    result: defaultState,
  },
  {
    state: defaultState,
    action: {
      type: SET_FIELD_VALUE,
      field: {
        name: 'type',
        value: 'deposit',
      },
    },
    result: {
      errors: {},
      serializedForm: {
        type: 'deposit',
        amount: '',
        description: '',
      },
    },
  },
  {
    state: defaultState,
    action: {
      type: SET_ERRORS,
      errors: {
        amount: true,
      },
    },
    result: {
      errors: {
        amount: true,
      },
      serializedForm: {
        type: '',
        amount: '',
        description: '',
      },
    },
  },
  {
    state: {
      errors: {
        type: true,
        amount: true,
        description: true,
      },
      serializedForm: {
        type: 'withdrawl',
        amount: '101.1',
        description: 'test',
      },
    },
    action: {
      type: CLEAR_FORM,
    },
    result: defaultState,
  },
];

reducerTestCases.forEach(testCase => {
  test(`the TransactionForm reducer handles the ${testCase.action.type || '@@INIT'} action`, t => {
    const state = reducer(testCase.state, testCase.action);
    t.deepEqual(state, testCase.result);
  });
});

