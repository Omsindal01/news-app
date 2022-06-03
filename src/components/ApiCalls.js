import axios from "axios";
import React, { Component } from "react";

export const getTopNews = async () => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return data.articles;
  } catch (err) {
    console.error(err.message);
  }
};

export const getNewsByTopic = async (topic) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return data.articles;
  } catch (err) {
    console.error(err.message);
  }
};
export const getByFilter = async (filter) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${filter}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return data.articles;
  } catch (err) {
    console.error(err.message);
  }
};
