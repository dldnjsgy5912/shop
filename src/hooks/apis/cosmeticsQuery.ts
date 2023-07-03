import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

export interface UserType {
    api_featured_image: string;
    brand: string;
    category: string | null;
    count?: number;
    created_at: string;
    currency: string | null;
    description: string;
    id: number;
    image_link: string;
    name: string;
    price: string;
    price_sign: string | null;
    product_api_url: string;
    product_colors: [];
    product_link: string;
    product_type: string;
    rating: number;
    tag_list: [];
    updated_at: string;
    website_link: string;
}
interface UserTypes {
    data: UserType[];
}

const fetchCosmetics = () => {
    return axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
};

export const useCosmeticsQuery = () => {
    return useQuery<UserTypes, AxiosError>("cosmetics", fetchCosmetics, {
        staleTime: 1000 * 20,
        cacheTime: 1000 * 40,
        // refetchOnWindowFocus: false,
        onSuccess: (data) => {},
        onError: (e) => {
            alert(e.message);
        },
    });
};
