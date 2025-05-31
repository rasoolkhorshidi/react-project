import { useEffect, useState } from "react";
import "./fetchData.css";
import axios from "axios";
import { Link } from "react-router-dom";

function FeData() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticle(result.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="dataBox">
      {article.map((item, index) => (
        <div className="dataItem">
          <img src={item.imageUrl} alt="" />
          <p>ID: {item.id}</p>
          <p>title: {item.title}</p>
          <p>time: {item.readingtime}</p>
          <p>
            <Link to={`/article/${item.id}`}>ReadMore</Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeData;
