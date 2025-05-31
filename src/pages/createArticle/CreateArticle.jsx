import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import style from "./CreateArticle.module.css";

function CreateArticle() {
  let [Article, setArticle] = useState({});
  let handleChange = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className={style.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>
          <div className={style.inputWrapper}>
            <label>عنوان</label>
            <input type="text" onChange={handleChange} name="title" />
          </div>
          <div className={style.inputWrapper}>
            <label>تاریخ</label>
            <input type="text" onChange={handleChange} name="date" />
          </div>
          <div className={style.inputWrapper}>
            <label>مدت زمان خاندن</label>
            <input type="text" onChange={handleChange} name="readingTime" />
          </div>
          <div className={style.inputWrapper}>
            <label>نویسنده</label>
            <input type="text" onChange={handleChange} name="athor" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
