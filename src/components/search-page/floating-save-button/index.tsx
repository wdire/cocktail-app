"use client";

import { BookmarkIcon } from "@/components/_helpers/icons";
import styles from "./floating-save-button.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { CocktailsContext } from "@/context/cocktails-context";

const FloatingSaveButton = () => {
  const { savedCocktails } = useContext(CocktailsContext);

  return (
    <Link href={"/saved"} className={styles.floating_save_button}>
      <BookmarkIcon />
      <div className={styles.number}>{savedCocktails.length}</div>
    </Link>
  );
};

export default FloatingSaveButton;
