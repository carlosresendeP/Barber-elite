import React from 'react';
import { useTheme } from 'styled-components';
import SEO from '../components/ui/SEO';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';

const HomePage = () => {
  const theme = useTheme();
  
  return (
    <>
      <SEO 
        title="Barber+ | A Melhor Barbearia de São Paulo"
        description="Descubra a Barber+, a barbearia que combina tradição e modernidade. Cortes profissionais, cuidados com barba e tratamentos especiais. Agende seu horário!"
        keywords="barbearia são paulo, corte de cabelo masculino, barba, grooming, estilo masculino, barbearia moderna, corte profissional"
        themeColor={theme.colors.primary.main}
      />
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;