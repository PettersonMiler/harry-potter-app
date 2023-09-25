import favorite from "../assets/favorite.svg";
import favoriteBorder from "../assets/favorite_border.svg";
import { useFavorites } from "../context/FavoritesContext";

interface Props {
  className: string;
  id: string;
}

export const FavoriteIcon = ({ className, id }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(id);

  return (
    <div
      className={className}
      onClick={(e) => {
        e.preventDefault();

        if (isFavorite) {
          return removeFavorite(id);
        }
        return addFavorite(id);
      }}
    >
      <img src={isFavorite ? favorite : favoriteBorder} alt="Favorite" />
    </div>
  );
};
