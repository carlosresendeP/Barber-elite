import styled from 'styled-components';

export const AboutSection = styled.section`
  background: #2d2d2d;
  padding: 80px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutImageContainer = styled.div`
  flex: 1;
`;

export const InteriorImage = styled.div`
  width: 100%;
  height: 400px;
  background: url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
    border-radius: 10px;
  }
`;

export const AboutText = styled.div`
  flex: 1;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #ccc;
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
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