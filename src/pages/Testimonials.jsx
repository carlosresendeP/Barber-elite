import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../components/StyledComponents';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 2.5rem;
  border-radius: 10px;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.2;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientDetails = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
  }
`;

const TestimonialText = styled.p`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: 1.8;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

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
