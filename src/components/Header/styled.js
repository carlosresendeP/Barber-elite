import styled from 'styled-components';
import { Link } from 'react-router';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ $scrolled }) =>
        $scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  padding: 1.5rem 5%;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: ${({ $scrolled, theme }) =>
        $scrolled ? `1px solid ${theme.colors.secondary}` : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 3%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 2px;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => $isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.98);
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: right 0.3s ease;
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 2rem;
  }
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;
