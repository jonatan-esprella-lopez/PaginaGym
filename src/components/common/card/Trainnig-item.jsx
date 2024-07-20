import Icon1 from "../../../assets/images/Tienda-clases/Icono-1-Entrenamiento.svg";

const TrainingItem = ({ title, description, tags }) => {
  return (
    <div className="training">
      <img src={Icon1} alt={title} />
      <div className="training-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <button className="more-info">{">"}</button>
    </div>
  );
};

export default TrainingItem;
