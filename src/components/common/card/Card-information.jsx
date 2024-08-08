import Time from "../../../assets/icons/Zone/time.png"

const InfoCard = ({ title, children, link, linkText }) => {
  return (
    <div className="info-card">
      <div className="container-head-zone">
        <img src={Time} alt="Tiempo" />
        <h3>{title}</h3>
      </div>
      {children}
      {link && <a href={link}>{linkText}</a>}
    </div>
  );
};

export default InfoCard;
