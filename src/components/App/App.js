import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Divider,
  Icon,
  Menu,
  Table } from 'stardust';
import moment from 'moment';
import TransactionForm from '../TransactionForm';

export function App({ transactions }) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const tableData = transactions.map(transaction => ({
    date: moment(transaction.date).format('dddd, MMMM Do, YYYY h:mm a'),
    description: transaction.description,
    amount: currencyFormatter.format(transaction.amount),
    endBalance: currencyFormatter.format(transaction.endBalance),
  }));

  return (
    <Container>
      <Menu attached="top">
        <Menu.Item header>
          <Icon name="money" />
          Banking App
        </Menu.Item>
      </Menu>
      <Divider hidden />
      <TransactionForm />
      <Divider hidden />
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
};

export default connect(state => ({
  transactions: state.transactions,
}))(App);
