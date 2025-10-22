import React from 'react';
import { useTheme } from 'styled-components';
import {
  ServicesSection,
  Container,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceImage,
  ServiceTitle,
  ServiceDescription,
  ServicePrice,
  ServicesCTA,
  PrimaryButton
} from './styles';

const Services = () => {
  const theme = useTheme();
  
  const services = [
    {
      id: 1,
      title: 'Corte de Cabelo',
      description: 'Um corte moderno para realçar seu estilo, feito com técnicas modernas e produtos de qualidade.',
      price: 'R$ 30',
      color: theme.colors.services.hair,
      image: 'https://images.unsplash.com/photo-1647140655214-e4a2d914971f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=465'
    },
    {
      id: 2,
      title: 'Barba Completa',
      description: 'Modelagem e aparagem completa da sua barba com produtos premium e técnicas tradicionais.',
      price: 'R$ 45',
      color: theme.colors.services.beard,
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      title: 'Corte + Barba',
      description: 'A combinação perfeita para um visual completo e impecável.',
      price: 'R$ 65',
      color: theme.colors.services.combo,
      image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      title: 'Corte Infantil',
      description: 'Cortes divertidos e estilosos para os pequenos, com todo cuidado e atenção.',
      price: 'R$ 25',
      color: theme.colors.services.kids,
      image: 'https://plus.unsplash.com/premium_photo-1677098576199-971c398f5403?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'
    },
    {
      id: 5,
      title: 'Pintura',
      description: 'Pinturas nas cores da barba ou no rosto com produtos naturais apropriados da sua pele.',
      price: 'R$ 80',
      color: theme.colors.services.treatment,
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 6,
      title: 'Limpeza de Pele',
      description: 'Cuidado especial para uma pele impecável, saudável e hidratada.',
      price: 'R$ 100',
      color: theme.colors.services.skincare,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <ServicesSection id="servicos">
      <Container>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <SectionSubtitle>Cuidados especiais para cada ocasião</SectionSubtitle>
        
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceImage $image={service.image} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServicePrice>{service.price}</ServicePrice>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <ServicesCTA>
          <h3>Pronto para renovar o visual?</h3>
          <PrimaryButton>Agende sua Sessão</PrimaryButton>
        </ServicesCTA>
      </Container>
    </ServicesSection>
  );
};

export default Services;