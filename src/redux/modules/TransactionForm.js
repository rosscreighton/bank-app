import { createTransaction } from './transactions';

export const SET_FIELD_VALUE = 'bank-app/TransactionForm/set-field-value';
export const SET_ERRORS = 'bank-app/TransactionForm/set-errors';
export const CLEAR_FORM = 'bank-app/TransactionForm/clear-form';

export const setFieldValue = (name, value) => ({
  type: SET_FIELD_VALUE,
  field: {
    name,
    value,
  },
});

const validationsByField = {
  type: value => !!value,
  amount: value => Number(value) > 0,
};

export const validateField = (fieldName, value) => {
  const validationFunc = validationsByField[fieldName];
  return validationFunc ? validationFunc(value) : true;
};

export const validateForm = serializedForm => {
  const errors = {};
  Object.keys(validationsByField).forEach(fieldName => {
    const value = serializedForm[fieldName];
    const valid = validateField(fieldName, value);

    if (!valid) errors[fieldName] = true;
  });

  return errors;
};

export const submitForm = () => (dispatch, getState) => {
  const serializedForm = getState().TransactionForm.serializedForm;
  const errors = validateForm(serializedForm);
  const hasErrors = !!Object.keys(errors).length;

  if (hasErrors) {
    dispatch({
      type: SET_ERRORS,
      errors,
    });
  } else {
    dispatch(createTransaction(serializedForm));
    dispatch({ type: CLEAR_FORM });
  }
};

export const defaultState = {
  errors: {},
  serializedForm: {
    type: '',
    amount: '',
    description: '',
  },
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        serializedForm: {
          ...state.serializedForm,
          [action.field.name]: action.field.value,
        },
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case CLEAR_FORM:
      return defaultState;
    default:
      return defaultState;
  }
}
