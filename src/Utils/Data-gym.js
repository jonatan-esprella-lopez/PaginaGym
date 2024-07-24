import gimnasio1 from "../assets/images/Gym/gimnasio-1.jpeg";
import gimnasio2 from "../assets/images/Gym/gimnasio-2.jpg";
import gimnasio3 from "../assets/images/Gym/gimnasio-3.jpg";
import gimnasio4 from "../assets/images/Gym/gimnasio-4.jpeg";
import gimnasio5 from "../assets/images/Gym/gimnasio-5.jpg";

export const initialGyms = [
  {
    id: 1,
    name: 'Averanda',
    address: 'AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR',
    offers: '1ER MES GRATIS + INSCRIPCIÓN Bs10',
    prices: {
      SMART: 'Bs199.00',
      BLACK: 'Bs299.00',
      FIT: 'Bs199.00'
    },
    image: gimnasio1,
    features: ['Estructuras', 'Estacionamiento', 'Elevador', 'Ritmos Fitness'],
  },
  {
    id: 2,
    name: 'Cocha',
    address: 'AVENIDA DE LOS INSURGENTES SUR 1234, Ciudad de México - CDMX',
    offers: '2 MESES GRATIS + INSCRIPCIÓN Bs5',
    prices: {
      SMART: 'Bs199.00',
      BLACK: 'Bs299.00',
      FIT: 'Bs199.00'
    },
    image: gimnasio2,
    features: ['Lacto - Bar', 'Nutricionista', 'Full Kombat'],
  },
  {
    id: 3,
    name: 'Fuerza Gym',
    address: 'CALLE DE LA FORTALEZA 789, Monterrey - NL',
    offers: 'DESCUENTO DEL 50% EN EL PRIMER MES',
    prices: {
      SMART: 'Bs199.00',
      BLACK: 'Bs299.00',
      FIT: 'Bs199.00'
    },
    image: gimnasio3,
    features: ['Estacionamiento', 'Elevador', 'Entrenamiento Funcional'],
  },
  {
    id: 4,
    name: 'Fit & Well',
    address: 'BOULEVARD DE LA SALUD 456, Guadalajara - JAL',
    offers: 'INSCRIPCIÓN GRATIS',
    prices: {
      SMART: 'Bs199.00',
      BLACK: 'Bs119.00',
      FIT: 'Bs199.00'
    },
    image: gimnasio4,
    features: ['Nutricionista', 'Step-Z', 'Rebound Xtreme'],
  },
  {
    id: 5,
    name: 'Health Hub',
    address: 'CALLE DEL BIENESTAR 123, Puebla - PUE',
    offers: '3 MESES GRATIS + INSCRIPCIÓN Bs15',
    prices: {
      SMART: 'Bs199.00',
      BLACK: 'Bs199.00',
      FIT: 'Bs299.00'
    },
    image: gimnasio5,
    features: ['Elevador', 'Ritmos Fitness', 'Full Kombat'],
  }
];
