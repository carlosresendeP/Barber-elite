import { Section, SectionTitle, SectionSubtitle } from '../../components/Common';
import { FaAward, FaUsers, FaCut } from 'react-icons/fa';
import {
  AboutContent,
  AboutImage,
  AboutText,
  Stats,
  StatCard
} from './styled';

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
