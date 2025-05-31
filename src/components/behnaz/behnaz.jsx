import Article from "../article/Article";
import style from "./behnaz.module.css";

function Behnaz() {
  return (
    <>
      <div className="container">
        <div className={style.homeWrapper}>
          <h2>مقالات جدید</h2>
          <div className={style.articleWrapper}>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </>
  );
}

export default Behnaz;
