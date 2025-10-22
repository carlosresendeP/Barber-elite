import React from 'react';
import { FaStar } from 'react-icons/fa';
import {
  TestimonialsSection,
  Container,
  SectionTitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialAvatar,
  AvatarPlaceholder,
  TestimonialName,
  Rating,
  TestimonialComment,
  TestimonialsCTA,
  PrimaryButton
} from './styles';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'João Pereira',
      rating: 5,
      comment: 'A melhor barbearia da cidade! Com profissionais experientes e um atendimento de primeira!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Carlos Souza',
      rating: 5,
      comment: 'Frequento há anos e nunca me decepcionei. Ambiente acolhedor e serviço impecável!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'André Lima',
      rating: 5,
      comment: 'Excelente atendimento e preços justos. Saio sempre satisfeito com o resultado!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <TestimonialsSection id="depoimentos">
      <Container>
        <SectionTitle>Depoimentos de Nossos Clientes</SectionTitle>
        
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialAvatar>
                <AvatarPlaceholder $avatar={testimonial.avatar} />
              </TestimonialAvatar>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </Rating>
              <TestimonialComment>"{testimonial.comment}"</TestimonialComment>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        
        <TestimonialsCTA>
          <PrimaryButton>Agende seu Horário</PrimaryButton>
        </TestimonialsCTA>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;