import { Section, SectionTitle, SectionSubtitle, Button } from '../../components/Common';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import {
  ContactContainer,
  ContactInfo,
  InfoCard,
  InfoText,
  WhatsAppCard,
  WhatsAppButton,
  ContactForm,
  FormGroup,
  Input,
  TextArea,
  MapContainer
} from './styled';

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
