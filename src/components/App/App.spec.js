import React from 'react';
import test from 'ava';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import { App } from './App';

test('<App /> calls createTransaction when button is clicked', t => {
  const createTransaction = spy();
  const wrapper = shallow(
    <App transactions={[]} createTransaction={createTransaction} />
  );

  wrapper.find('button').simulate('click');

  t.is(createTransaction.calledOnce, true)
});
