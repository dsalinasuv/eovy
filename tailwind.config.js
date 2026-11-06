/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Fondos abisales de alto rendimiento
        abyss: {
          950: '#07080A', // Fondo base ultra profundo
          900: '#0B0C0E', // Fondo de tarjetas y paneles principales
          850: '#101216', // Superficies elevadas y hover states
          800: '#16191F', // Menús desplegables y micro-toolbars
        },
        // Bordes de cristal técnico
        borderGlass: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          active: 'rgba(255, 255, 255, 0.14)',
          glow: 'rgba(165, 243, 252, 0.25)', // Resplandor cian tenue
        },
        // Gradiente Térmico Pastel (Estrictamente Azul Pastel, Cian Sutil y Plata)
        thermal: {
          ice: '#E2F1F8',     // Acento superior / luz blanca-azulada
          cyan: '#99F6E4',    // Cian suave para isolíneas y cuantil P50
          frost: '#7DD3FC',   // Azul pastel tenue para bandas P10-P90
          mist: '#64748B',    // Gris neutro de referencia
          muted: '#94A3B8',   // Texto analítico plateado
        },
        // Estados de red eléctrica regulada
        mibel: {
          up: '#34D399',      // Desvío a subir / favorable
          down: '#FBBF24',    // Desvío a bajar / riesgo
          neutral: '#94A3B8', // Neutro
        },
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        // Landing de día (Eovy): fondos claros y acentos de energía renovable
        eo: {
          dawn: '#F6FBF8',
          mint: '#DCF0E6',
          sky: '#D2E9F8',
          ink: '#0D2A2B',
          leaf: '#0B7A4B',
          leafDark: '#095F3B',
          wind: '#2B9BD9',
          sun: '#FFC53D',
          forest: '#0A3D2E',
          sage: '#8FA98A',
        }
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'thermal-glow': '0 0 35px -8px rgba(125, 211, 252, 0.15)',
        'thermal-glow-sm': '0 0 15px -4px rgba(153, 246, 228, 0.20)',
        'console-inner': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
      },
      letterSpacing: {
        'tighter-editorial': '-0.04em',
      },
      backgroundImage: {
        'gradient-thermal-line': 'linear-gradient(90deg, #E2F1F8 0%, #99F6E4 50%, #7DD3FC 100%)',
        'gradient-thermal-surface': 'radial-gradient(ellipse at top, rgba(125, 211, 252, 0.05) 0%, rgba(7, 8, 10, 0) 70%)',
      }
    },
  },
  plugins: [],
};
