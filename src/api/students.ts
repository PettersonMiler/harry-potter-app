import { instance } from "api";

export const fetchStudents = async () => {
  const { data } = await instance.get("/characters/students");

  return data;
};
