import RitmosFitness from "../assets/images/Clases/Ritmos.jpg";
import FullKombat from "../assets/images/Clases/FullKombat.jpg";

export const initialGyms = [
  {
    id: 1,
    name: 'Averanda',
    address: 'AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR',
    offers: '1ER MES GRATIS + INSCRIPCIÓN $10',
    prices: {
      SMART: '$499.00',
      BLACK: '$599.00',
      FIT: '$399.00'
    },
    image: FullKombat,
    features: ['Estructuras', 'Estacionamiento', 'Elevador', 'Ritmos Fitness'],
  },
  {
    id: 2,
    name: 'Cocha',
    address: 'AVENIDA DE LOS INSURGENTES SUR 1234, Ciudad de México - CDMX',
    offers: '2 MESES GRATIS + INSCRIPCIÓN $5',
    prices: {
      SMART: '$599.00',
      BLACK: '$699.00',
      FIT: '$499.00'
    },
    image: RitmosFitness,
    features: ['Lacto - Bar', 'Nutricionista', 'Full Kombat'],
  },
  {
    id: 3,
    name: 'Fuerza Gym',
    address: 'CALLE DE LA FORTALEZA 789, Monterrey - NL',
    offers: 'DESCUENTO DEL 50% EN EL PRIMER MES',
    prices: {
      SMART: '$399.00',
      BLACK: '$499.00',
      FIT: '$299.00'
    },
    image: FullKombat,
    features: ['Estacionamiento', 'Elevador', 'Entrenamiento Funcional'],
  },
  {
    id: 4,
    name: 'Fit & Well',
    address: 'BOULEVARD DE LA SALUD 456, Guadalajara - JAL',
    offers: 'INSCRIPCIÓN GRATIS',
    prices: {
      SMART: '$299.00',
      BLACK: '$399.00',
      FIT: '$199.00'
    },
    image: RitmosFitness,
    features: ['Nutricionista', 'Step-Z', 'Rebound Xtreme'],
  },
  {
    id: 5,
    name: 'Health Hub',
    address: 'CALLE DEL BIENESTAR 123, Puebla - PUE',
    offers: '3 MESES GRATIS + INSCRIPCIÓN $15',
    prices: {
      SMART: '$799.00',
      BLACK: '$899.00',
      FIT: '$699.00'
    },
    image: RitmosFitness,
    features: ['Elevador', 'Ritmos Fitness', 'Full Kombat'],
  }
];
