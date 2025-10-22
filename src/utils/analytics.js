// Google Analytics 4 Events
export const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
            custom_map: { metric1: 'barber_engagement' },
            ...parameters
        });
    }
};

// Specific tracking functions
export const trackServiceView = (serviceName) => {
    trackEvent('view_service', {
        service_name: serviceName,
        event_category: 'Services',
        event_label: serviceName
    });
};

export const trackBookingIntent = (service = 'general') => {
    trackEvent('booking_intent', {
        service: service,
        event_category: 'Conversion',
        event_label: 'Booking Button Click'
    });
};

export const trackPhoneCall = () => {
    trackEvent('contact_phone', {
        event_category: 'Contact',
        event_label: 'Phone Call'
    });
};

export const trackWhatsApp = () => {
    trackEvent('contact_whatsapp', {
        event_category: 'Contact',
        event_label: 'WhatsApp'
    });
};

export const trackSocialClick = (platform) => {
    trackEvent('social_click', {
        platform: platform,
        event_category: 'Social Media',
        event_label: platform
    });
};

// Page view tracking
export const trackPageView = (pageName) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: pageName,
            page_location: window.location.href
        });
    }
};