import React from 'react';

const InfoCard = ({ title, children, link, linkText }) => {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      {children}
      {link && <a href={link}>{linkText}</a>}
    </div>
  );
};

export default InfoCard;
