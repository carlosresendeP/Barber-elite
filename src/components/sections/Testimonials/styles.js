import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  background-color: #111;
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
  color: #fff;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #333;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #DAA520;
  }
`;

export const TestimonialAvatar = styled.div`
  margin-bottom: 1rem;
`;

export const AvatarPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background: url(${props => props.$avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  border: 2px solid #DAA520;

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

export const TestimonialName = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #fff;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;

  .star {
    color: #DAA520;
    font-size: 1.2rem;
  }
`;

export const TestimonialComment = styled.p`
  color: #ccc;
  line-height: 1.6;
  font-style: italic;
`;

export const TestimonialsCTA = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

export const PrimaryButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #DAA520;
  color: #000;

  &:hover {
    background-color: #B8860B;
  }
`;