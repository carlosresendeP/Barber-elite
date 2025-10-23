import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  SocialLinks,
  SocialIcon,
  MenuToggle
} from './styled';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Nav>
        <Logo to="/">BARBER ELITE</Logo>
        
        <NavLinks $isOpen={isOpen}>
          <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
          <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
          <NavLink onClick={() => scrollToSection('servicos')}>Serviços</NavLink>
          <NavLink onClick={() => scrollToSection('galeria')}>Galeria</NavLink>
          <NavLink onClick={() => scrollToSection('depoimentos')}>Depoimentos</NavLink>
          <NavLink onClick={() => scrollToSection('contato')}>Contato</NavLink>
          
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
        </NavLinks>

        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </MenuToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
