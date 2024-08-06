import { LoadingIcon } from "../icons";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <LoadingIcon />
    </div>
  );
};

export default Loading;
