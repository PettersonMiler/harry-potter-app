import { useQuery } from "react-query";
import { fetchCharacter } from "../../api/characters";

export const useCharacter = (id: string) =>
  useQuery(["characters", id], () => fetchCharacter(id));
