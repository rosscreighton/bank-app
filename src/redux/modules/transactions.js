export const CREATE_DEPOSIT = 'bank-app/transactions/create-deposit';
export const CREATE_WITHDRAWL = 'bank-app/transactions/create-withdrawl';
export const DEPOSIT = 'deposit';
export const WITHDRAWL = 'withdrawl';

const createWithdrawl = (parsedAmount, description, prevTransaction) => ({
  type: CREATE_WITHDRAWL,
  transaction: {
    amount: parsedAmount * -1,
    description,
    date: Date.now(),
    endBalance: prevTransaction ? prevTransaction.endBalance - parsedAmount : parsedAmount * -1,
  },
});

const createDeposit = (parsedAmount, description, prevTransaction) => ({
  type: CREATE_WITHDRAWL,
  transaction: {
    amount: Math.abs(parsedAmount),
    description,
    date: Date.now(),
    endBalance: prevTransaction ? prevTransaction.endBalance + parsedAmount : parsedAmount,
  },
});

export const createTransaction = args => (dispatch, getState) => {
  const { type, amount, description } = args;
  const parsedAmount = Number(amount);
  const prevTransaction = getState().transactions.slice().shift();

  if (type === WITHDRAWL) {
    dispatch(createWithdrawl(parsedAmount, description, prevTransaction));
  } else {
    dispatch(createDeposit(parsedAmount, description, prevTransaction));
  }
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_DEPOSIT:
      return [action.transaction, ...state];
    case CREATE_WITHDRAWL:
      return [action.transaction, ...state];
    default:
      return state;
  }
}
