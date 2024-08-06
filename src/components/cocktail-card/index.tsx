import Image from "next/image";
import styles from "./cocktail-card.module.scss";
import { CocktailSearchResultItem } from "@/types/cocktail.type";
import { useContext } from "react";
import { CocktailsContext } from "@/context/cocktails-context";

type CocktailCardProps = {
  img_src: string;
  name: string;
  cocktail: CocktailSearchResultItem;
};

const CocktailCard = ({ img_src, name, cocktail }: CocktailCardProps) => {
  const { savedCocktailIds, removeCocktail, saveCocktail } =
    useContext(CocktailsContext);

  const isSaved = savedCocktailIds?.includes(cocktail.idDrink);

  const handleSaveButtonClick = () => {
    if (isSaved) {
      removeCocktail(cocktail.idDrink);
    } else {
      saveCocktail(cocktail);
    }
  };

  return (
    <div className={styles.cocktail_card}>
      <Image src={img_src} width={400} height={400} alt="" />

      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <button className={styles.save_button} onClick={handleSaveButtonClick}>
          {isSaved ? "UNSAVE" : "SAVE"}
        </button>
      </div>
    </div>
  );
};

export default CocktailCard;
