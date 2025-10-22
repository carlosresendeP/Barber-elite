import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  border-top: 1px solid #333;
  padding: 3rem 0 1rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FooterSection = styled.div`
  h4 {
    color: #DAA520;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #DAA520;
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.ul`
  list-style: none;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #DAA520;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;

  svg {
    color: #DAA520;
    font-size: 1.1rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  gap: 2rem;
  color: #ccc;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #ccc;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #DAA520;
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 1rem;
  color: #666;
  font-size: 0.9rem;
`;