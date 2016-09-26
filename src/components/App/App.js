import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container, Table } from 'stardust';
import moment from 'moment';
import { createTransaction } from '../../redux/modules/transactions';

export function App({ transactions, createTransaction }) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const tableData = transactions.map(transaction => ({
    date: moment(transaction.date).format('dddd, MMMM Do YYYY, h:mm a'),
    description: transaction.description,
    amount: currencyFormatter.format(transaction.amount),
    endBalance: currencyFormatter.format(transaction.endBalance),
  }));

  return (
    <Container>
      <button
        onClick={() => createTransaction('test transaction', '7.75')}
      >
        create
      </button>
      <Table data={tableData}>
        <Table.Column dataKey="date" />
        <Table.Column dataKey="description" />
        <Table.Column dataKey="amount" />
        <Table.Column dataKey="endBalance" headerRenderer={() => 'Balance'} />
      </Table>

    </Container>
  );
}

App.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
  createTransaction: PropTypes.func,
};

export default connect(state => ({
  transactions: state.transactions,
}), {
  createTransaction,
})(App);
