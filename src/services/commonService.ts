import { apiSecure } from "./axios";

export const getAccountInformation = async (token: string) => {
  const { data } = await apiSecure.get("/me");
  return data;
};
