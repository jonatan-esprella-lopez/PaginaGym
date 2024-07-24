

const GymCard = ({ gym }) => (
  <div key={gym.id} className="card-gym estructura-card-2">
    <img src={gym.image} alt="Gym" className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{gym.name}</h2>
      <p className="card-address">{gym.address}</p>
      <a href="#" className="card-link">Ver gimnasio</a>
      <div className="card-offer">{gym.offers}</div>
      <div className="card-prices">
        {Object.entries(gym.prices).map(([type, price]) => (
          <div key={type} className="price">
            <span className="price-type">{type}</span>
            <span className="original-price">{price}</span>
            <span className="discounted-price">$0.00*</span>
          </div>
        ))}
      </div>
      <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
    </div>
  </div>
);

export default GymCard;
