export const servicesData = [
    {
        id: 1,
        title: 'Corte de Cabelo',
        description: 'Um corte moderno para realçar seu estilo, feito com técnicas modernas e produtos de qualidade.',
        price: 'R$ 50',
        color: '#8B4513',
        duration: '30 min',
        category: 'cabelo'
    },
    {
        id: 2,
        title: 'Barba Completa',
        description: 'Modelagem e aparagem completa da sua barba com produtos premium e técnicas tradicionais.',
        price: 'R$ 40',
        color: '#2F4F4F',
        duration: '25 min',
        category: 'barba'
    },
    {
        id: 3,
        title: 'Corte + Barba',
        description: 'A combinação perfeita para um visual completo e impecável.',
        price: 'R$ 80',
        color: '#8B4513',
        duration: '50 min',
        category: 'combo'
    },
    {
        id: 4,
        title: 'Corte Infantil',
        description: 'Cortes divertidos e estilosos para os pequenos, com todo cuidado e atenção.',
        price: 'R$ 40',
        color: '#FFB6C1',
        duration: '25 min',
        category: 'infantil'
    },
    {
        id: 5,
        title: 'Pintura',
        description: 'Pinturas nas cores da barba ou no rosto com produtos naturais apropriados da sua pele.',
        price: 'R$ 70',
        color: '#90EE90',
        duration: '40 min',
        category: 'tratamento'
    },
    {
        id: 6,
        title: 'Limpeza de Pele',
        description: 'Cuidado especial para uma pele impecável, saudável e hidratada.',
        price: 'R$ 60',
        color: '#DEB887',
        duration: '35 min',
        category: 'tratamento'
    }
];

export const testimonialsData = [
    {
        id: 1,
        name: 'João Pereira',
        rating: 5,
        comment: 'A melhor barbearia da cidade! Com profissionais experientes e um atendimento de primeira!',
        date: '2024-10-15',
        service: 'Corte + Barba'
    },
    {
        id: 2,
        name: 'Carlos Souza',
        rating: 5,
        comment: 'Frequento há anos e nunca me decepcionei. Ambiente acolhedor e serviço impecável!',
        date: '2024-10-10',
        service: 'Corte de Cabelo'
    },
    {
        id: 3,
        name: 'André Lima',
        rating: 5,
        comment: 'Excelente atendimento e preços justos. Saio sempre satisfeito com o resultado!',
        date: '2024-10-08',
        service: 'Barba Completa'
    }
];

export const contactData = {
    phone: '(11) 99999-4321',
    whatsapp: '5511999994321',
    email: 'contato@barberplus.com.br',
    address: {
        street: 'Rua Principal, 123',
        neighborhood: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01000-000',
        full: 'Rua Principal, 123 - Centro, São Paulo - SP'
    },
    hours: {
        weekdays: 'Segunda à Sexta: 9h às 19h',
        saturday: 'Sábado: 8h às 17h',
        sunday: 'Domingo: Fechado'
    },
    social: {
        instagram: 'https://www.instagram.com/barberplus',
        facebook: 'https://www.facebook.com/barberplus',
        whatsapp: 'https://wa.me/5511999994321'
    }
};

export const businessData = {
    name: 'Barber+',
    slogan: 'Seu Estilo, Nossa Arte',
    description: 'A melhor barbearia da cidade! Oferecemos cortes modernos, cuidados com barba e tratamentos especiais. Agende seu horário e renove seu visual com profissionais experientes.',
    founded: '2020',
    specialties: ['Cortes Modernos', 'Cuidados com Barba', 'Tratamentos Especiais', 'Atendimento Personalizado'],
    values: ['Qualidade', 'Tradição', 'Modernidade', 'Excelência']
};