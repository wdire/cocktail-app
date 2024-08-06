"use client";

import CocktailCard from "@/components/cocktail-card";
import styles from "./list-saved.module.scss";
import stylesCardsContainer from "../../../styles/containers/cards-container.module.scss";
import stylesSectionContainer from "../../../styles/containers/section-container.module.scss";
import { useContext } from "react";
import { CocktailsContext } from "@/context/cocktails-context";

const ListSaved = () => {
  const { savedCocktails } = useContext(CocktailsContext);

  return (
    <div className={styles.list_saved}>
      <div className={stylesSectionContainer.section_container}>
        <h1>
          <span>Saved </span>
          Lists
        </h1>

        {savedCocktails?.length > 0 ? (
          <div className={stylesCardsContainer.cards_container}>
            {savedCocktails?.map((cocktail, index) => {
              return (
                <CocktailCard
                  img_src={cocktail.strDrinkThumb}
                  name={cocktail.strDrink}
                  key={index}
                  cocktail={cocktail}
                />
              );
            })}
          </div>
        ) : (
          <>
            <div>No cocktails saved, yet</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListSaved;
