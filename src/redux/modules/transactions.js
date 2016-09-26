export const CREATE_TRANSACTION = 'bank-app/transactions/create-transaction';

export const createTransaction = (description, _amount) => (dispatch, getState) => {
  const amount = Number(_amount);
  const previousTransaction = getState().transactions.slice().pop();

  dispatch({
    type: CREATE_TRANSACTION,
    transaction: {
      amount,
      description,
      date: Date.now(),
      endBalance: previousTransaction ? previousTransaction.amount + amount : amount,
    },
  });
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return [...state, action.transaction];
    default:
      return state;
  }
}
