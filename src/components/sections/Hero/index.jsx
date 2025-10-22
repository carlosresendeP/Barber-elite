
import {
  HeroSection,
  HeroContent,
  Container,
  HeroText,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImage,
  BarberImage
} from './styles';

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Container>
          <HeroText>
            <h1>Seu Estilo <br /> Nossa Arte</h1>
            <HeroButtons>
              <PrimaryButton>Agende Agora</PrimaryButton>
              <SecondaryButton>Ver Cortes</SecondaryButton>
            </HeroButtons>
          </HeroText>
        </Container>

        <HeroImage>
          <BarberImage />
        </HeroImage>
      </HeroContent>


    </HeroSection>
  );
};

export default Hero;