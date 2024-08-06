import { BookmarkIcon } from "@/components/_helpers/icons";
import styles from "./floating-save-button.module.scss";
import Link from "next/link";

const FloatingSaveButton = () => {
  return (
    <Link href={"/saved"} className={styles.floating_save_button}>
      <BookmarkIcon />
      <div className={styles.number}>7</div>
    </Link>
  );
};

export default FloatingSaveButton;
