// Cores do tema
export const colors = {
    // Cores primárias
    primary: {
        main: '#DAA520',         // Dourado principal
        dark: '#B8860B',         // Dourado escuro (hover)
        light: '#F4E4A6',        // Dourado claro
        gradient: 'linear-gradient(45deg, #DAA520, #B8860B)'
    },

    // Cores de background
    background: {
        primary: '#000000',      // Preto principal
        secondary: '#111111',    // Cinza muito escuro
        card: '#1a1a1a',        // Cinza escuro para cards
        accent: '#2d2d2d',       // Cinza médio
        overlay: 'rgba(0, 0, 0, 0.8)'
    },

    // Cores de texto
    text: {
        primary: '#ffffff',      // Branco principal
        secondary: '#cccccc',    // Cinza claro
        muted: '#999999',        // Cinza médio
        accent: '#DAA520',       // Dourado para acentos
        dark: '#000000'          // Preto para textos em backgrounds claros
    },

    // Cores de borda
    border: {
        primary: '#333333',      // Borda padrão
        accent: '#DAA520',       // Borda dourada
        light: '#555555',        // Borda clara
        focus: '#DAA520'         // Borda de foco
    },

    // Cores de status
    status: {
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',
        info: '#17a2b8'
    },

    // Cores dos serviços (mantendo as existentes)
    services: {
        hair: '#8B4513',         // Marrom para cabelo
        beard: '#2F4F4F',        // Cinza escuro para barba
        combo: '#8B4513',        // Marrom para combo
        kids: '#FFB6C1',         // Rosa claro para infantil
        treatment: '#90EE90',    // Verde claro para tratamentos
        skincare: '#DEB887'      // Bege para cuidados com pele
    },

    // Gradientes especiais
    gradients: {
        hero: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        text: 'linear-gradient(45deg, #fff, #DAA520)',
        card: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
        gold: 'linear-gradient(135deg, #DAA520, #B8860B)',
        interior: 'linear-gradient(135deg, #8B4513, #DAA520)'
    }
};

export const fonts = {
    primary: "Inria Serif, serif",
    secondary: "Instrument Serif, serif"

}

// Breakpoints para responsividade
export const breakpoints = {
    mobile: '480px',         // Smartphones
    tablet: '768px',         // Tablets
    laptop: '1024px',        // Laptops
    desktop: '1200px',       // Desktops
    widescreen: '1440px'     // Monitores grandes
};

// Media queries helpers
export const media = {
    mobile: `@media (max-width: ${breakpoints.mobile})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    laptop: `@media (max-width: ${breakpoints.laptop})`,
    desktop: `@media (max-width: ${breakpoints.desktop})`,

    // Mobile first approach
    mobileUp: `@media (min-width: ${breakpoints.mobile})`,
    tabletUp: `@media (min-width: ${breakpoints.tablet})`,
    laptopUp: `@media (min-width: ${breakpoints.laptop})`,
    desktopUp: `@media (min-width: ${breakpoints.desktop})`,

    // Between breakpoints
    mobileToTablet: `@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
    tabletToLaptop: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
    laptopToDesktop: `@media (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`
};

// Theme principal
export const theme = {
    colors,
    breakpoints,
    media
};

export default theme;