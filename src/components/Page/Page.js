import React, { PropTypes } from 'react';
import {
  Container,
  Divider,
  Icon,
  Menu } from 'stardust';

export function Page({ children }) {
  return (
    <div>
      <Menu attached>
        <Container>
          <Menu.Item header>
            <Icon name="money" />
            Banking App
          </Menu.Item>
        </Container>
      </Menu>
      <Container>
        <Divider hidden />
        {children}
      </Container>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
