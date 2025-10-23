import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 4rem 5% 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.gray.light};
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray.light};
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 5px;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-5px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.dark};
  color: ${({ theme }) => theme.colors.gray.light};
  font-size: 0.9rem;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>BARBER ELITE</h3>
          <FooterText>
            Seu estilo começa aqui. Experiência premium em cuidados masculinos 
            com profissionais especializados.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <FooterLink href="#inicio">Início</FooterLink>
          <FooterLink href="#sobre">Sobre Nós</FooterLink>
          <FooterLink href="#servicos">Serviços</FooterLink>
          <FooterLink href="#galeria">Galeria</FooterLink>
          <FooterLink href="#contato">Contato</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <FooterLink href="https://maps.google.com" target="_blank">
            <FaMapMarkerAlt />
            Rua Example, 123 - São Paulo, SP
          </FooterLink>
          <FooterLink href="tel:+5511999999999">
            <FaPhone />
            (11) 99999-9999
          </FooterLink>
          <FooterLink href="mailto:contato@barberelite.com">
            <FaEnvelope />
            contato@barberelite.com
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Horário</h3>
          <FooterText>Segunda a Sexta: 9h às 20h</FooterText>
          <FooterText>Sábado: 9h às 18h</FooterText>
          <FooterText>Domingo: Fechado</FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © 2025 <span>BarberElite</span>. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
