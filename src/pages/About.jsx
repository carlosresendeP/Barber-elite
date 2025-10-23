import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle } from '../components/StyledComponents';
import { FaAward, FaUsers, FaCut } from 'react-icons/fa';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      height: 400px;
    }
  }
`;

const AboutText = styled.div`
  p {
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gray.dark};
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
  }

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <Section id="sobre">
      <SectionTitle>Sobre a BarberElite</SectionTitle>
      <SectionSubtitle>
        Tradição, estilo e experiência no cuidado masculino
      </SectionSubtitle>

      <AboutContent>
        <AboutImage>
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800" 
            alt="Barbearia BarberElite"
          />
        </AboutImage>

        <AboutText>
          <p>
            A <strong>BarberElite</strong> nasceu com o propósito de oferecer uma experiência 
            premium em cuidados masculinos, combinando técnicas tradicionais com as 
            tendências mais modernas do mercado.
          </p>
          <p>
            Nossa equipe é formada por profissionais altamente qualificados e apaixonados 
            pelo que fazem. Cada corte é executado com precisão, atenção aos detalhes e 
            um atendimento personalizado que valoriza a individualidade de cada cliente.
          </p>
          <p>
            Mais do que uma barbearia, somos um espaço onde estilo, confiança e 
            masculinidade se encontram. Aqui, você não apenas cuida da sua aparência, 
            mas também desfruta de momentos de relaxamento em um ambiente elegante 
            e acolhedor.
          </p>
        </AboutText>
      </AboutContent>

      <Stats>
        <StatCard>
          <FaAward />
          <h3>15+</h3>
          <p>Anos de Experiência</p>
        </StatCard>
        <StatCard>
          <FaUsers />
          <h3>5000+</h3>
          <p>Clientes Satisfeitos</p>
        </StatCard>
        <StatCard>
          <FaCut />
          <h3>10+</h3>
          <p>Profissionais Especializados</p>
        </StatCard>
      </Stats>
    </Section>
  );
};

export default About;
