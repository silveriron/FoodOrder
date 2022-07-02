import style from "./Header.module.css";
import img from "../../img/food.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ openModal }) => {
  return (
    <>
      <header className={style.header}>
        <a href="/">
          <h1>ReactMeals</h1>
        </a>
        <HeaderCartButton openModal={openModal} />
      </header>
      <section className={style.headerImg}>
        <img src={img}></img>
      </section>
    </>
  );
};

export default Header;
