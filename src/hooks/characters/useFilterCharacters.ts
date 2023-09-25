import { useMemo } from "react";
import { Character } from "../../dto/character.dto";

export const useFilterCharacters = (
  selectedHouse: string,
  showFavorites: boolean,
  favorites: string[],
  data: Character[] | undefined,
  filter: string
) => {
  const characters = useMemo(() => {
    const filteredCharacters = data?.filter((character) => {
      if (filter !== "all") {
        if (filter === "students" && !character.hogwartsStudent) {
          return false;
        }
        if (filter === "staff" && !character.hogwartsStaff) {
          return false;
        }
      }

      if (showFavorites && !favorites.includes(character.id)) {
        return false;
      }

      if (selectedHouse !== "all" && character.house !== selectedHouse) {
        return false;
      }

      return true;
    });
    return filteredCharacters;
  }, [selectedHouse, showFavorites, favorites, data, filter]);

  return characters;
};
