import {useEffect, useState } from 'react';
import {
  HeaderContainer,
  Container,
  Navbar,
  Logo,
  NavMenu,
  NavLink,
  AgendButton
} from './styles';
import { RxScissors } from "react-icons/rx";

const Header = () => {

  //ficar com blur ao rolar a pagina
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolled])
  


  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Container>
        <Navbar>
          <Logo>
            <span>Barber<RxScissors /></span>
          </Logo>
          <NavMenu>
            <li><NavLink href="#home">Home</NavLink></li>
            <li><NavLink href="#sobre">Sobre</NavLink></li>
            <li><NavLink href="#servicos">Serviços</NavLink></li>
            <li><NavLink href="#depoimentos">Depoimentos</NavLink></li>
            <li><NavLink href="#contato">Contato</NavLink></li>
          </NavMenu>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;