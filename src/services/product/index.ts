import { getAxiosInstance } from "../../util";
import { ProductResponse, ProductsResponse } from "./types/response";

const useProductService = () => {
    const axiosInstance = getAxiosInstance();

    const findAllProducts = async (): Promise<ProductsResponse> => {
        const response = await axiosInstance.get('products');
        return response.data;
    }

    const findProductsByCotegory = async (category: string): Promise<ProductsResponse> => {
        const response = await axiosInstance.get(`produts/category/${category}`);
        return response.data;
    }

    const findProductById = async (id: string): Promise<ProductResponse> => {
        const response = await axiosInstance.get(`products/${id}`);
        return response.data;
    }

    return { findAllProducts, findProductsByCotegory, findProductById };
}

export default useProductService;