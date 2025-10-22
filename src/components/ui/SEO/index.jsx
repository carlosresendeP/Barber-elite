import React from 'react';

const SEO = ({ 
  title = "Barber+ | Barbearia Moderna e Tradicional",
  description = "A melhor barbearia da cidade! Oferecemos cortes modernos, cuidados com barba e tratamentos especiais. Agende seu horário e renove seu visual com profissionais experientes.",
  keywords = "barbearia, corte de cabelo, barba, tratamento masculino, estilo, grooming, São Paulo, beleza masculina",
  image = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  url = "https://barberplus.com.br",
  type = "website",
  themeColor = "#DAA520"
}) => {
  React.useEffect(() => {
    // Atualiza o título da página
    document.title = title;
    
    // Remove meta tags existentes
    const existingTags = document.querySelectorAll('meta[data-seo]');
    existingTags.forEach(tag => tag.remove());
    
    // Cria novas meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Barber+' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'Barber+' },
      { property: 'og:locale', content: 'pt_BR' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      
      // Local Business Schema
      { name: 'business:contact_data:locality', content: 'São Paulo' },
      { name: 'business:contact_data:region', content: 'SP' },
      { name: 'business:contact_data:country_name', content: 'Brasil' },
      
      // Performance
      { name: 'theme-color', content: themeColor },
      { name: 'msapplication-TileColor', content: themeColor },
    ];
    
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });
    
    // Adiciona structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Barber+",
      "description": description,
      "url": url,
      "telephone": "(11) 99999-4321",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Principal, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01000-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-23.5505",
        "longitude": "-46.6333"
      },
      "openingHours": [
        "Mo-Fr 09:00-19:00",
        "Sa 08:00-17:00"
      ],
      "priceRange": "R$ 40 - R$ 80",
      "image": image,
      "sameAs": [
        "https://www.instagram.com/barberplus",
        "https://www.facebook.com/barberplus"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Barbearia",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corte de Cabelo",
              "description": "Corte moderno e personalizado"
            },
            "price": "50",
            "priceCurrency": "BRL"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Barba Completa",
              "description": "Modelagem e aparagem completa"
            },
            "price": "40",
            "priceCurrency": "BRL"
          }
        ]
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.setAttribute('data-seo', 'true');
    document.head.appendChild(script);
    
  }, [title, description, keywords, image, url, type, themeColor]);
  
  return null;
};

export default SEO;