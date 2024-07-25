import GymCard from "./Gym-card";

const GymList = ({ gyms }) => (
  <div className='cont-gyms'>
    {gyms.map(gym => (
      <GymCard key={gym.id} gym={gym} />
    ))}
  </div>
);

export default GymList;