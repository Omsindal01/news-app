import React from "react";
import moment from "moment";

export default function Card({
  imgUrl,
  title,
  description,
  author,
  date,
  url,
  source,
}) {
  const myStyle = {
    height: "100%",
  };
  return (
    <>
      <div className="card" style={myStyle}>
        <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {source && source.name ? source.name : "Source"}
          </li>
          <li className="list-group-item">{moment(date).fromNow()}</li>
          <li className="list-group-item">
            <a
              href={url}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
