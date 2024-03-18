import { getAxiosInstance } from "../../util";
import { contactResponse } from "./types/response";

const useProductService = () => {
    const axiosInstance = getAxiosInstance();

    const findAllProducts = async (): Promise<contactResponse> => {
        const response = await axiosInstance.get('products');
        return response.data;
    }

    const findProductsByCotegory = async (category: string): Promise<contactResponse> => {
        const response = await axiosInstance.get(`produts/category/${category}`);
        return response.data;
    }

    return { findAllProducts, findProductsByCotegory };
}

export default useProductService;