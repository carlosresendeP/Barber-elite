import { Section, SectionTitle, SectionSubtitle } from '../../components/Common';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import {
  TestimonialsContainer,
  TestimonialCard,
  QuoteIcon,
  ClientInfo,
  ClientImage,
  ClientDetails,
  Rating,
  TestimonialText
} from './styled';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Cliente há 3 anos',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Melhor barbearia da região! Atendimento impecável, ambiente agradável e profissionais extremamente competentes. Meu visual nunca esteve tão em dia!',
  },
  {
    id: 2,
    name: 'Ricardo Mendes',
    role: 'Cliente há 1 ano',
    image: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    text: 'Excelente experiência! A atenção aos detalhes faz toda a diferença. Sempre saio satisfeito e com aquele visual renovado. Super recomendo!',
  },
  {
    id: 3,
    name: 'Fernando Costa',
    role: 'Cliente há 2 anos',
    image: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    text: 'Profissionalismo e qualidade em cada serviço. O ambiente é top e os barbeiros são verdadeiros artistas. A BarberElite é referência!',
  },
];

const Testimonials = () => {
  return (
    <Section id="depoimentos">
      <SectionTitle>Depoimentos</SectionTitle>
      <SectionSubtitle>
        O que nossos clientes dizem sobre nós
      </SectionSubtitle>

      <TestimonialsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            
            <ClientInfo>
              <ClientImage>
                <img src={testimonial.image} alt={testimonial.name} />
              </ClientImage>
              <ClientDetails>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </ClientDetails>
            </ClientInfo>

            <Rating>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Rating>

            <TestimonialText>{testimonial.text}</TestimonialText>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;
