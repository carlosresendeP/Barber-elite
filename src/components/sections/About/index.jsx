import React from 'react';
import {
  AboutSection,
  Container,
  AboutContent,
  AboutImageContainer,
  InteriorImage,
  AboutText,
  PrimaryButton
} from './styles';

const About = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <AboutContent>
          <AboutImageContainer>
            <InteriorImage />
          </AboutImageContainer>
          <AboutText>
            <h2>A Essência da Tradição e Modernidade</h2>
            <p>
              Fundada com a paixão pela arte da barbearia clássica, nossa barbearia 
              combina a experiência de uma era clássica com a praticidade moderna.
            </p>
            <p>
              Nossa missão é oferecer um serviço de excelência, focado na experiência 
              do cliente, combinando a nostalgia com um sistema tradicional. 
              Valorizamos a qualidade, o atendimento personalizado e a cultura de um 
              ambiente que reflete nossos valores.
            </p>
            <PrimaryButton>Conheça Nossos Serviços</PrimaryButton>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;