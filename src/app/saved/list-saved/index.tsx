import CocktailCard from "@/components/cocktail-card";
import styles from "./list-saved.module.scss";
import stylesCardsContainer from "../../../styles/containers/cards-container.module.scss";
import stylesSectionContainer from "../../../styles/containers/section-container.module.scss";

const ListSaved = () => {
  return (
    <div className={styles.list_saved}>
      <div className={stylesSectionContainer.section_container}>
        <h1>
          <span>Saved </span>
          Lists
        </h1>
        <div className={stylesCardsContainer.cards_container}>
          <CocktailCard
            id="1"
            img_src="https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg"
            name="Cocktail Example"
          />
          <CocktailCard
            id="1"
            img_src="https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg"
            name="Cocktail Example"
          />
          <CocktailCard
            id="1"
            img_src="https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg"
            name="Cocktail Example"
          />
        </div>
      </div>
    </div>
  );
};

export default ListSaved;
