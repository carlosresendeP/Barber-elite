import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterText,
  FooterLink,
  SocialLinks,
  SocialIcon,
  Copyright
} from './styled';

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
