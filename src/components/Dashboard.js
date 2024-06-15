import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import ArticleTile from "./ArticleTile";
import Loading from "./Loading";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://www.teguharief.com/api/posts/")
    .then((response) => {
      setArticles(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard_tiles">
          <ArticleTile articles={articles} />
        </div>
      )}
    </>
  );
};

export default Dashboard;