import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../components/StyledComponents';
import { GiRazor, GiBeard, GiComb,} from 'react-icons/gi';
import { FaCut } from 'react-icons/fa';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 2.5rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.secondary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);

    &::before {
      transform: scaleX(1);
    }

    svg {
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

const IconWrapper = styled.div`
  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServicePrice = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-top: 1rem;
`;

const services = [
  {
    icon: FaCut,
    title: 'Corte Masculino',
    description: 'Corte moderno e personalizado, adaptado ao seu estilo e formato de rosto.',
    price: 'R$ 50',
  },
  {
    icon: GiBeard,
    title: 'Barba Tradicional',
    description: 'Modelagem e cuidado completo da barba com navalha e produtos premium.',
    price: 'R$ 40',
  },
  {
    icon: GiRazor,
    title: 'Corte + Barba Combo',
    description: 'Pacote completo com corte de cabelo e barba para uma transformação total.',
    price: 'R$ 80',
  },
  {
    icon: GiComb,
    title: 'Tratamentos Capilares',
    description: 'Hidratação, reconstrução e tratamentos especiais para cabelo e couro cabeludo.',
    price: 'R$ 60',
  },
];

const Services = () => {
  return (
    <Section id="servicos">
      <SectionTitle>Nossos Serviços</SectionTitle>
      <SectionSubtitle>
        Serviços premium com profissionais especializados
      </SectionSubtitle>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper>
              <service.icon />
            </IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default Services;
