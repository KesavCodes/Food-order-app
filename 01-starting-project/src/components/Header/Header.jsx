import LogoAndTitle from "./LogoAndTitle";
import CartValue from "./CartValue";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <LogoAndTitle />
      <CartValue />
    </div>
  );
};

export default Header;
