import { instance } from "api";

export const fetchStaff = async () => {
  const { data } = await instance.get("/characters/staff");

  return data;
};
