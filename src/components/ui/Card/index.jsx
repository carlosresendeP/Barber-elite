import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding: ${props => props.padding || '2rem'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.border.accent};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) => theme.media.tablet} {
    padding: 1.5rem;
  }
`;

export const IconCard = styled(Card)`
  text-align: center;
  position: relative;
`;

export const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 0.75rem;
  margin: 0 auto 1.5rem;
  position: relative;
  background-color: ${props => props.color || props.theme.colors.primary.main};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }
`;

export const TestimonialCard = styled(Card)`
  text-align: center;
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradients.gold};
  border-radius: 50%;
  margin: 0 auto 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }
`;