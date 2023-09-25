import { useQuery } from "react-query";
import { fetchCharacters } from "../../api/characters";

export const useCharacters = () => useQuery("characters", fetchCharacters);
