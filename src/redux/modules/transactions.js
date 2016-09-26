export const CREATE_TRANSACTION = 'bank-app/transactions/create-transaction';

export const createTransaction = (description, _amount) => (dispatch, getState) => {
  const amount = Number(_amount);
  const previousTransaction = getState().transactions.slice().shift();
  const endBalance = previousTransaction ? previousTransaction.endBalance + amount : amount;

  dispatch({
    type: CREATE_TRANSACTION,
    transaction: {
      amount,
      description,
      date: Date.now(),
      endBalance,
    },
  });
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return [action.transaction, ...state];
    default:
      return state;
  }
}
