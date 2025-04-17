import React from "react";

const Card = ({ image, link, title }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div className="card h-100">
        <div className="card-img-wrapper">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body d-flex align-items-end justify-content-center">
          <p className="card-title text-center m-0 lead text-light">{title}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
