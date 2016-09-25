import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import App from './App';

test('<App /> renders hello world', t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.text(), 'Hello World');
});
