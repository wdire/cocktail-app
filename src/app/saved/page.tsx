import { Metadata } from "next";
import ListSaved from "./list-saved";

export const metadata: Metadata = {
  title: "Saved",
};

const SavedPage = () => {
  return (
    <main>
      <ListSaved />
    </main>
  );
};

export default SavedPage;
