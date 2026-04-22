// Template configurations for psychologist demo pages

export type TemplateStyle = 'warm-safe' | 'modern-clean';

export interface TemplateConfig {
  id: TemplateStyle;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    bg: string;
    light: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  tone: {
    headline: string;
    cta: string;
    about: string;
  };
  imagery: {
    hero: string;
    about: string;
    icons: string;
  };
}

export const templates: Record<TemplateStyle, TemplateConfig> = {
  'warm-safe': {
    id: 'warm-safe',
    name: 'Ciepła i Bezpieczna',
    description: 'Tradycyjny, ciepły design budujący zaufanie',
    colors: {
      primary: '#8B7355',    // Warm brown
      secondary: '#A8B5A0',  // Sage green
      accent: '#D4C4B0',     // Beige
      text: '#4A4A4A',       // Soft dark
      bg: '#F9F7F4',         // Warm white
      light: '#FDFBF9',      // Lighter warm white
    },
    fonts: {
      heading: 'Georgia, "Times New Roman", serif',
      body: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    tone: {
      headline: 'Bezpieczna przestrzeń dla Twoich emocji',
      cta: 'Umów bezpieczną konsultację',
      about: 'Wierzę, że każdy zasługuje na wsparcie w atmosferze ciepła i zrozumienia.',
    },
    imagery: {
      hero: '🌿',  // Plants, nature
      about: '🪑', // Comfortable chair
      icons: 'soft-rounded',
    },
  },
  'modern-clean': {
    id: 'modern-clean',
    name: 'Nowoczesna i Czysta',
    description: 'Profesjonalny, minimalistyczny design',
    colors: {
      primary: '#2C5F7F',    // Deep blue
      secondary: '#6B9AC4',  // Soft blue
      accent: '#E8F1F5',     // Light blue
      text: '#2D3142',       // Dark grey
      bg: '#FFFFFF',         // Pure white
      light: '#F8FAFB',      // Light grey
    },
    fonts: {
      heading: '"Inter", "Segoe UI", sans-serif',
      body: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    tone: {
      headline: 'Profesjonalna pomoc psychologiczna',
      cta: 'Umów konsultację',
      about: 'Łączę wiedzę naukową z indywidualnym podejściem do każdego pacjenta.',
    },
    imagery: {
      hero: '🏙️',  // Clean, urban
      about: '📚', // Professional
      icons: 'minimal',
    },
  },
};

export function getTemplate(style: TemplateStyle): TemplateConfig {
  return templates[style];
}
