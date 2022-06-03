import React from "react";

export default function Card({
  imgUrl,
  title,
  description,
  author,
  date,
  url,
}) {
  const myStyle = {
    width: "18rem",
    flex: "24%",
    margin: "10px 0.5%",
  };
  return (
    <>
      <div className="card" style={myStyle}>
        <img src={imgUrl} className="card-img-top" alt="Couldn't load image" />
        <div className="card-body">
          <h5 className="card-title">{title?.substring(0, 120)}</h5>
          <p className="card-text">{description?.substring(0, 200)}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {!author || author.length > 30 ? "Source" : author}
          </li>
          <li className="list-group-item">{date}</li>
          <li className="list-group-item">
            <a href={url} className="card-link" target="_blank">
              Read More
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
