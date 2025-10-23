import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 2.5rem;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
  }
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.2;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ClientDetails = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 0.9rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
  }
`;

export const TestimonialText = styled.p`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: 1.8;
  font-style: italic;
  position: relative;
  z-index: 1;
`;
