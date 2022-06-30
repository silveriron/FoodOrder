import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div>
          <a href="/">볼리레스토랑</a>
        </div>
        <div>
          <button>
            <span>장바구니</span>
            <span>3</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
