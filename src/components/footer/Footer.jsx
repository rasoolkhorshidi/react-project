import { useState } from "react";
import style from "./Footer.module.css";

function Footer() {
  const [count, setCount] = useState(0);
  function format() {
    if (count === 0) {
      return "zero";
    } else {
      return count;
    }
  }
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function del() {
    setCount(0);
  }
  return (
    <div className={style.footer}>
      <span>Product</span>
      <button onClick={decrease}>-</button>
      <span>{format()}</span>
      <button onClick={increase}>+</button>
      <button onClick={del}>Delete</button>
    </div>
  );
}

export default Footer;
