import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle, Button } from '../components/StyledComponents';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useState } from 'react';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.gray.dark};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    border-left: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
  }
`;

const InfoText = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray.light};
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.colors.gray.light};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const WhatsAppCard = styled.div`
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: white;

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

const WhatsAppButton = styled(Button)`
  background: white;
  color: #25D366;
  border-color: white;

  &:hover {
    background: transparent;
    color: white;
    border-color: white;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 2.5rem;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;

const Input = styled.input`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.gray.medium};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.light};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.gray.medium};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.light};
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Section id="contato">
      <SectionTitle>Entre em Contato</SectionTitle>
      <SectionSubtitle>
        Estamos prontos para atendê-lo. Agende seu horário agora!
      </SectionSubtitle>

      <ContactContainer>
        <ContactInfo>
          <InfoCard>
            <FaMapMarkerAlt />
            <InfoText>
              <h3>Localização</h3>
              <p>Rua Example, 123<br />Centro - São Paulo, SP<br />CEP: 01234-567</p>
            </InfoText>
          </InfoCard>

          <InfoCard>
            <FaPhone />
            <InfoText>
              <h3>Telefone</h3>
              <p><a href="tel:+5511999999999">(11) 99999-9999</a></p>
            </InfoText>
          </InfoCard>

          <InfoCard>
            <FaEnvelope />
            <InfoText>
              <h3>E-mail</h3>
              <p><a href="mailto:contato@barberelite.com">contato@barberelite.com</a></p>
            </InfoText>
          </InfoCard>

          <InfoCard>
            <FaClock />
            <InfoText>
              <h3>Horário de Funcionamento</h3>
              <p>
                Segunda a Sexta: 9h às 20h<br />
                Sábado: 9h às 18h<br />
                Domingo: Fechado
              </p>
            </InfoText>
          </InfoCard>

          <WhatsAppCard>
            <FaWhatsapp />
            <h3>Agende pelo WhatsApp</h3>
            <p>Atendimento rápido e personalizado</p>
            <WhatsAppButton
              as="a"
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </WhatsAppButton>
          </WhatsAppCard>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Nome Completo</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">E-mail</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone">Telefone</label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Mensagem</label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva o serviço desejado ou sua dúvida..."
              required
            />
          </FormGroup>

          <Button type="submit" $size="large">
            Enviar Mensagem
          </Button>
        </ContactForm>
      </ContactContainer>

      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975649625047!2d-46.65533068502207!3d-23.56141896706579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização BarberElite"
        />
      </MapContainer>
    </Section>
  );
};

export default Contact;
