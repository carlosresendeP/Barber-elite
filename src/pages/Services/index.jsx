import { Section, SectionTitle, SectionSubtitle } from '../../components/Common';
import { GiRazor, GiBeard, GiComb } from 'react-icons/gi';
import { FaCut } from 'react-icons/fa';
import {
  ServicesGrid,
  ServiceCard,
  IconWrapper,
  ServiceTitle,
  ServiceDescription,
  ServicePrice
} from './styled';

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
