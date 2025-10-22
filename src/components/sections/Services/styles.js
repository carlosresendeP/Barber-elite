import styled from 'styled-components';

export const ServicesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 80px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.border.accent};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ServiceImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  position: relative;
  background: ${props => props.$image ? `url(${props.$image})` : props.color || props.theme.colors.primary.main};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid ${props => props.color || props.theme.colors.primary.main};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.background.overlay};
    border-radius: 8px;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ServicePrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const ServicesCTA = styled.div`
  text-align: center;
  padding: 3rem 0 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const PrimaryButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;