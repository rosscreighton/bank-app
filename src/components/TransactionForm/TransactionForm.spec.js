import React from 'react';
import test from 'ava';
import { spy } from 'sinon';
import { mount } from 'enzyme';
import { TransactionForm } from './TransactionForm';

test('<TransactionForm /> calls createDeposit when button is clicked', t => {
  const createTransaction = spy();
  const wrapper = mount(
    <TransactionForm createTransaction={createTransaction} />
  );

  wrapper.find('form').simulate('submit');

  t.is(createTransaction.calledOnce, true);
});
