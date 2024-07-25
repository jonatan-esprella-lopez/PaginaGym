import TrainingItem from '../../common/card/Trainnig-item';

const trainingData = [
  {
    id: 1,
    title: 'Básico 1 - Entrenamiento de adaptación',
    description:
      'Este entrenamiento está dedicado a descubrir todo lo que necesitas saber sobre tu cuerpo, su funcionamiento y el dominio de cada parte, entenderás las rutinas de entrenamiento en este programa.',
    tags: ['Presencial', 'Livestream'],
  },
  {
    id: 2,
    title: 'Básico 2 - Entrenamiento de Fuerza nivel 1',
    description: 'Aprende sobre cómo ganar más fuerza, aprenderás los principios básicos de una rutina pre-programada para el máximo rendimiento en la fuerza.',
    tags: ['Presencial', 'Livestream']
  },
  {
    id: 3,
    title: 'Intermedio 2 - Entrenamiento de Fuerza nivel 3',
    description: 'Aprende sobre cómo ganar más fuerza, aprenderás los principios básicos de una rutina pre-programada para el máximo rendimiento en la fuerza.',
    tags: ['Presencial', 'Livestream', 'Licencia de FDA']
  },
  {
    id: 4,
    title: 'Intermedio 2 - Entrenamiento de Fuerza nivel 4',
    description: 'Aprende sobre cómo ganar más fuerza, aprenderás los principios básicos de una rutina pre-programada para el máximo rendimiento en la fuerza.',
    tags: ['Presencial', 'Livestream', 'Licencia de FDA']
  }
];

const TrainingList = () => {
  return (
    <section className="training-list">
      <h2>
        Programas de entrenamiento <strong>Básico</strong>
      </h2>
      <p>Inicia tus rutinas y obtén tus objetivos ya!!</p>

      {trainingData.map((training) => (
        <TrainingItem
          key={training.id}
          title={training.title}
          description={training.description}
          tags={training.tags}
        />
      ))}
    </section>
  );
};

export default TrainingList;
