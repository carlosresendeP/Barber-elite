import styled from 'styled-components';

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 2.5rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.secondary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);

    &::before {
      transform: scaleX(1);
    }

    svg {
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

export const IconWrapper = styled.div`
  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ServicePrice = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-top: 1rem;
`;
