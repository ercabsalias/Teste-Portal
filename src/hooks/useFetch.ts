import useSWR from "swr";
import { api } from "../services";

export function useFetch(url: string) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url);
    const data = await response.data;
    return data;
  });



  return { data, error };
}