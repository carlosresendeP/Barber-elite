import styled from 'styled-components';
import { Button } from '../../components/Common';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoCard = styled.div`
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

export const InfoText = styled.div`
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

export const WhatsAppCard = styled.div`
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

export const WhatsAppButton = styled(Button)`
  background: white;
  color: #25D366;
  border-color: white;

  &:hover {
    background: transparent;
    color: white;
    border-color: white;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.gray.dark};
  padding: 2.5rem;
  border-radius: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;

export const Input = styled.input`
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

export const TextArea = styled.textarea`
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

export const MapContainer = styled.div`
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
