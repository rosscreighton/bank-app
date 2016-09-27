import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Divider,
  Form,
  Header,
  Segment } from 'stardust';
import { DEPOSIT, WITHDRAWL } from '../../redux/modules/transactions';
import { setFieldValue, submitForm } from '../../redux/modules/TransactionForm';

export function TransactionForm({ errors, serializedForm, setFieldValue, submitForm }) {
  const selectOptions = [
    { text: 'Deposit', value: DEPOSIT },
    { text: 'Withdrawl', value: WITHDRAWL },
  ];

  return (
    <Segment>
      <Header textAlign="center">Create a transaction</Header>
      <Divider hidden />
      <Form
        onSubmit={(e, formData) => {
          e.preventDefault();
          submitForm(formData);
        }}
      >
        <Form.Group widths="equal">
          <Form.Select
            name="type"
            label="Deposit/WITHDRAWL"
            placeholder="Deposit/Withdrawl"
            error={errors.type}
            value={serializedForm.type}
            options={selectOptions}
            onChange={(e, value) => setFieldValue('type', value)}
          />
          <Form.Input
            name="amount"
            type="number"
            label="Amount"
            placeholder="$0.00"
            error={errors.amount}
            value={serializedForm.amount}
            onChange={e => setFieldValue('amount', e.target.value)}
          />
          <Form.Input
            name="description"
            label="Description"
            placeholder="Description"
            type="text"
            error={errors.description}
            value={serializedForm.description}
            onChange={e => setFieldValue('description', e.target.value)}
          />
        </Form.Group>
        <Divider hidden />
        <Button
          type="submit"
          primary
        >
          <Button.Content>Submit</Button.Content>
        </Button>
      </Form>
    </Segment>
  );
}

TransactionForm.propTypes = {
  errors: PropTypes.object.isRequired,
  serializedForm: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default connect(state => ({
  errors: state.TransactionForm.errors,
  serializedForm: state.TransactionForm.serializedForm,
}), {
  setFieldValue,
  submitForm,
})(TransactionForm);
