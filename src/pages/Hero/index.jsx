import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../../components/Common';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  WhatsAppButton
} from './styled';

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
