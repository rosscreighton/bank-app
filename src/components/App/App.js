import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Divider, Table } from 'stardust';
import moment from 'moment';
import Page from '../Page';
import TransactionForm from '../TransactionForm';
import { currencyFormatter } from '../../lib/utilities';

function App({ transactions }) {
  return (
    <Page>
      <TransactionForm />
      <Divider hidden />
      <Table
        data={transactions.map(transaction => ({
          date: moment(transaction.date).format('dddd, MMMM Do, YYYY h:mm a'),
          description: transaction.description,
          amount: currencyFormatter.format(transaction.amount),
          endBalance: currencyFormatter.format(transaction.endBalance),
        }))}
      >
        <Table.Column dataKey="date" />
        <Table.Column dataKey="description" />
        <Table.Column dataKey="amount" />
        <Table.Column dataKey="endBalance" headerRenderer={() => 'Balance'} />
      </Table>
    </Page>
  );
}

App.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default connect(state => ({
  transactions: state.transactions,
}))(App);
