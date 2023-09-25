import { instance } from "api";

export const fetchHouse = async (house: string) => {
  const { data } = await instance.get(`/characters/house/${house}`);

  return data;
};
