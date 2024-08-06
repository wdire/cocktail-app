import Image from "next/image";
import styles from "./cocktail-card.module.scss";

type CocktailCardProps = {
  id: string;
  img_src: string;
  name: string;
};

const CocktailCard = ({ img_src, name }: CocktailCardProps) => {
  return (
    <div className={styles.cocktail_card}>
      <Image src={img_src} width={400} height={400} alt="" />

      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <button className={styles.save_button}>SAVE</button>
      </div>
    </div>
  );
};

export default CocktailCard;
