import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import {
  FooterContainer,
  Container,
  FooterContent,
  FooterSection,
  Logo,
  FooterLinks,
  ContactInfo,
  ContactItem,
  FooterBottom,
  FooterInfo,
  SocialLinks,
  Copyright
} from './styles';

const Footer = () => {
  return (
    <FooterContainer id="contato">
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo>Barber+</Logo>
            <FooterLinks>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Contato</h4>
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>Rua Principal, 123 - Centro</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>(11) 99999-4321</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
          
          <FooterSection>
            <h4>Contato</h4>
            <ContactInfo>
              <ContactItem>
                <span>contato@barberplus.com.br</span>
              </ContactItem>
              <ContactItem>
                <span>Seg. à Sex. das 9h às 19h</span>
              </ContactItem>
              <ContactItem>
                <span>Sáb. das 8h às 17h</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <FooterInfo>
            <p>Rua Principal, 123 - Centro</p>
            <p>(11) 99999-4321</p>
            <p>Política de Privacidade</p>
          </FooterInfo>
          
          <SocialLinks>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </SocialLinks>
        </FooterBottom>
        
        <Copyright>
          <p>© 2025 Barber+. Todos os direitos reservados.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;