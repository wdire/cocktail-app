import styles from "./header.module.scss";
import stylesSectionContainer from "../../../styles/containers/section-container.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={stylesSectionContainer.section_container}>
        <div className={styles.header_wrapper}>
          <Link href={"/"} className={styles.logo}>
            Cocktail App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
