import React from 'react';
import test from 'ava';
import { spy } from 'sinon';
import { mount } from 'enzyme';
import { TransactionForm } from './TransactionForm';
import { defaultState } from '../../redux/modules/TransactionForm';

test('<TransactionForm /> calls submitForm when submit button is clicked', t => {
  const submitForm = spy();
  const setFieldValue = spy();
  const { errors, serializedForm } = defaultState;

  const wrapper = mount(
    <TransactionForm
      errors={errors}
      serializedForm={serializedForm}
      setFieldValue={setFieldValue}
      submitForm={submitForm}
    />
  );

  wrapper.find('form').simulate('submit');

  t.is(submitForm.calledOnce, true);
});
