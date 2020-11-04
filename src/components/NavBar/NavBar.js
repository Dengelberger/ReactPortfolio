import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Example;


