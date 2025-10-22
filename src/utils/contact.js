import { contactData } from '../data';

export const openWhatsApp = (message = 'Olá! Gostaria de agendar um horário.') => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

export const makePhoneCall = () => {
    window.location.href = `tel:${contactData.phone}`;
};

export const sendEmail = (subject = 'Contato - Barber+') => {
    const emailUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = emailUrl;
};

export const openMaps = () => {
    const address = encodeURIComponent(contactData.address.full);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapsUrl, '_blank');
};