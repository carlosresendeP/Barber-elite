import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../components/StyledComponents';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920') center/cover;
    opacity: 0.3;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 900px;
  padding: 0 2rem;
  animation: fadeInUp 1s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray.light};
  margin-bottom: 2.5rem;
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const WhatsAppButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="inicio">
      <HeroContent>
        <HeroTitle>
          Seu estilo <span>começa aqui</span>
        </HeroTitle>
        <HeroSubtitle>
          Experiência premium em cuidados masculinos com profissionais especializados
        </HeroSubtitle>
        <HeroButtons>
          <WhatsAppButton
            as="a"
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário."
            target="_blank"
            rel="noopener noreferrer"
            $size="large"
          >
            <FaWhatsapp />
            Agendar Horário
          </WhatsAppButton>
          <Button
            $variant="outline"
            $size="large"
            onClick={() => document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' })}
          >
            Nossos Serviços
          </Button>
        </HeroButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
