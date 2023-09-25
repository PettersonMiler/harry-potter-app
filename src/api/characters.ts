import { instance } from "../api";

export const fetchCharacters = async () => {
  const { data } = await instance.get("/characters");

  return data;
};

export const fetchCharacter = async (id: string) => {
  const { data } = await instance.get(`/character/${id}`);

  return data[0];
};
