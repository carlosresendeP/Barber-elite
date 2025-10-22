import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  height: 100vh;
  min-height: 600px;

  background: ${({ theme }) => theme.colors.gradients.hero};
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }



`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const HeroContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 2rem 0;
  position: relative;
`;


export const HeroText = styled.div`
  position: absolute;
  left: 0%;
  z-index: 20;


  h1 {
    font-size: 80px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;
    background: ${({ theme }) => theme.colors.gradients.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.dark};
  text-decoration: none;
  text-align: center;
  font-size: 20px; 
  text-transform: uppercase;
  outline: none;
  color: ${({ theme }) => theme.colors.text.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.status.success};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.status.success};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:active{
    transform: scale(0.98);
  }

  &:focus{
    outline: none;
  }
`;

export const SecondaryButton = styled.button`
  padding: 20px 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  text-align: center;
  font-size: 20px; ;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.background.overlay};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:active{
    transform: scale(0.98);
  }

  &:focus{
    outline: none;
  }
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0px;
  border: none;
  z-index: 1;

    &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
    z-index: 10;
    opacity: 0.5;
    filter: blur(10px);
  }
`;

export const BarberImage = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80');
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
    margin-top: 2rem;
  }
`;