import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Keyboard from '../img/keyboard';

// #region Styled Components
const Container = styled.header`
  padding: 2.4rem 0;
  position: relative;
  background: #ffffffa0;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLinks = styled.ul`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  flex: 50%;
  margin-bottom: 2.4rem;
  margin-left: 0;
  list-style: none;
  z-index: 1;

  & li {
    margin-bottom: 0;
  }

  & li + li {
    margin-left: 1.6rem;
  }
`;

const NavItem = styled.li`
  & a {
    color: #04415a;
    text-decoration: none;
  }
`;

const BrandLogo = styled.div`
  margin: 0;

  & a {
    font-family: Frank Ruhl Libre, serif;
    font-size: 4.8rem;
    font-weight: 700;
    color: #14788a;
    text-decoration: none;
  }
`;

// #endregion 

const Header = () => (
  <Container>
    <div className="container">
      <Content>
        <BrandLogo>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Keyboard />
            ktr
          </Link>
        </BrandLogo>
        <HeaderLinks>
          <NavItem>
            <Link to="/">Location</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/products">Projects</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </HeaderLinks>
      </Content>
    </div>
  </Container>
);

export default Header;
