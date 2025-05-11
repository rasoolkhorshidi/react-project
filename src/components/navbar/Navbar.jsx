import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={style.header}>
        <ul>
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
