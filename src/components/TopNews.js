import React, { useState, useEffect } from "react";
import { getTopNews, getNewsByTopic, getByFilter } from "./ApiCalls";
import Card from "./Card";
import { AiOutlineMenu } from "react-icons/ai";
export default function TopNews() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const [filter, setFilter] = useState("");
  const myStyle = { width: "25%" };

  const handleSearch = (e) => {
    e.preventDefault();
    setTopic(() => query);
  };

  const handleSelect = (e) => {
    setFilter(e.currentTarget.value);
  };
  useEffect(() => {
    if (filter === "") getTopNews().then((data) => setNews(data));
  }, [filter]);
  useEffect(() => {
    if (topic !== "") getNewsByTopic(topic).then((data) => setNews(data));
  }, [topic]);
  useEffect(() => {
    if (filter !== "") getByFilter(filter).then((data) => setNews(data));
  }, [filter]);
  console.log(news);
  return (
    <>
      <div className="home-page">
        <div className="search-bar">
          <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <AiOutlineMenu />
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={myStyle}
                  value={filter}
                  onChange={handleSelect}
                >
                  <option value="">Top news in India</option>
                  <option value="business">business</option>
                  <option value="entertainment">entertainment</option>
                  <option value="general">general</option>
                  <option value="health">health</option>
                  <option value="science">science</option>
                  <option value="sports">sports</option>
                  <option value="technology">technology</option>
                </select>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search by Topic"
                    aria-label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          {news.map((el, i) => (
            <div
              key={i}
              className="cardContainer col-xs-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 me-auto mt-4"
            >
              <Card
                imgUrl={el.urlToImage}
                title={el.title}
                description={el.description}
                author={el.author}
                date={el.publishedAt}
                url={el.url}
                source={el.source}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
