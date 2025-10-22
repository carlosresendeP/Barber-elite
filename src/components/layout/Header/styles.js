import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: transparent;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
  backdrop-filter: ${({ $isScrolled }) => $isScrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: background-color 0.3s ease;
  z-index: 1000;
  transition: backdrop-filter 0.5s ease;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 1rem;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: "Inria Serif", serif;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }
  
  ${({ theme }) => theme.media.mobile} {
    font-size: 1.25rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.9;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const AgendButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -8px #D4AF37;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
`;