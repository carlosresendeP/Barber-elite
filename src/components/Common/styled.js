import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme, $variant }) =>
        $variant === 'outline' ? 'transparent' : theme.colors.secondary};
  color: ${({ theme, $variant }) =>
        $variant === 'outline' ? theme.colors.secondary : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ $size }) => $size === 'large' ? '1rem 3rem' : '0.8rem 2rem'};
  font-size: ${({ $size }) => $size === 'large' ? '1.1rem' : '1rem'};
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${({ theme, $variant }) =>
        $variant === 'outline' ? theme.colors.secondary : theme.colors.primary};
    color: ${({ theme, $variant }) =>
        $variant === 'outline' ? theme.colors.primary : theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ $size }) => $size === 'large' ? '0.9rem 2rem' : '0.7rem 1.5rem'};
    font-size: ${({ $size }) => $size === 'large' ? '1rem' : '0.9rem'};
  }
`;

export const Section = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 3%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary};
    margin: 1rem auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 3%;
  }
`;
