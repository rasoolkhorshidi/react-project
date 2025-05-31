import style from "./Article.module.css";
import eshgh from "../../assets/images/eshgh.jpeg";
function Article() {
  return (
    <div className={style.article}>
      <img src={eshgh} alt="" />
      <h3>بهناز</h3>
      <p>عشق من</p>
    </div>
  );
}

export default Article;
