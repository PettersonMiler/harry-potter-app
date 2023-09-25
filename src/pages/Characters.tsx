import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useCharacters, useFilterCharacters } from "../hooks/characters";
import { useFavorites } from "../context/FavoritesContext";
import { Loading, FavoriteIcon } from "../components";

const Characters = () => {
  const [filter, setFilter] = useState<string>("all");
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [selectedHouse, setSelectedHouse] = useState<string>("all");

  const { favorites } = useFavorites();
  const { data, isLoading } = useCharacters();

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleHouseChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedHouse(event.target.value);
  };

  const characters = useFilterCharacters(
    selectedHouse,
    showFavorites,
    favorites,
    data,
    filter
  );

  return (
    <div>
      <h1 className="font-hp mt-10 text-6xl">Harry Potter Characters</h1>

      <div className="flex flex-row items-center my-4 justify-center">
        <label className="mr-2">Filter by:</label>
        <select onChange={handleFilterChange}>
          <option value="all">Students & Staff</option>
          <option value="students">Students</option>
          <option value="staff">Staff</option>
        </select>

        <label className="ml-4 mr-2">Show Favorites:</label>
        <input
          type="checkbox"
          checked={showFavorites}
          onChange={handleShowFavorites}
        />

        <label className="ml-4 mr-2">Filter by House:</label>
        <select onChange={handleHouseChange}>
          <option value="all">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {characters?.map((item) => (
              <Link key={item.id} to={`character/${item.id}`}>
                <div className="bg-green-2 p-4 rounded-lg shadow-md  cursor-pointer group relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto rounded-md "
                  />

                  <FavoriteIcon
                    className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    id={item.id}
                  />

                  <p className="text-center font-bold mt-2">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
