import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { UserType } from "./cosmeticsQuery";

interface UserTypes {
    data: UserType;
}

const fetchCosmetic = (id: string) => {
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
};

export const useCosmeticQuery = ({ id }: { id: string }) => {
    return useQuery<UserTypes, AxiosError>(["cosmetic", id], () => fetchCosmetic(id), {
        staleTime: 1000 * 20,
        cacheTime: 1000 * 40,
        // refetchOnWindowFocus: false,
        onSuccess: (data) => {},
        onError: (e) => {
            alert(e.message);
        },
    });
};
