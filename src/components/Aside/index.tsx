import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from 'react-icons/md';

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
} from './styles';

import LogoImage from '../../assets/logo.svg';

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <LogoImg src={LogoImage} alt="Logo Controle Financeiro" />
        <Title>Controle Financeiro</Title>
      </Header>

      <MenuContainer>
        <Link style={{ textDecoration: 'none' }} to="/">
          <MenuItemLink>
            <MdDashboard />
            Dashboard
          </MenuItemLink>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/list/entry-balance">
          <MenuItemLink>
            <MdArrowUpward />
            Entradas
          </MenuItemLink>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/list/exit-balance">
          <MenuItemLink>
            <MdArrowDownward />
            Saídas
          </MenuItemLink>
        </Link>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
