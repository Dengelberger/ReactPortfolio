import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/ReactPortfolio/#/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ReactPortfolio/#/Portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ReactPortfolio/#/Contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Example;


