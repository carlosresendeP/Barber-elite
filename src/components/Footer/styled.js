import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 4rem 5% 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray.light};
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 5px;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: 0.9rem;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
