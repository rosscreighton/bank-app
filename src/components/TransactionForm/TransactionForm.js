import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Header,
  Input,
  Segment,
  Select } from 'stardust';
import { createTransaction, DEPOSIT, WITHDRAWL } from '../../redux/modules/transactions';

export function TransactionForm({ createTransaction }) {
  const selectOptions = [
    { text: 'Deposit', value: DEPOSIT },
    { text: 'Withdrawl', value: WITHDRAWL },
  ];

  return (
    <Segment>
      <Header>Create a transaction</Header>
      <Form
        onSubmit={(e, data) => {
          e.preventDefault();
          createTransaction(data);
        }}
      >
        <Form.Group widths="equal">
          <Form.Field
            required
            name="type"
            control={Select}
            label="Deposit/Withdrawl"
            options={selectOptions}
            placeholder="Deposit/Withdrawl"
          />
          <Form.Field
            required
            name="amount"
            control={Input}
            label="Amount"
            placeholder="$0.00"
          />
          <Form.Field
            name="description"
            control={Input}
            label="Description"
            placeholder="Description"
          />
        </Form.Group>
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
  createTransaction: PropTypes.func.isRequired,
};

export default connect(null, {
  createTransaction,
})(TransactionForm);
