import { getAxiosInstance } from "../../util";
import { ProductResponse, ProductsResponse } from "./types/response";

const useProductService = () => {
    const axiosInstance = getAxiosInstance();

    const findAllProducts = async (): Promise<ProductsResponse | null> => {
        try {
            const response = await axiosInstance.get('products');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const findProductsByCotegory = async (category: string): Promise<ProductsResponse | null> => {
        try {
            const response = await axiosInstance.get(`products/category/${category}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const findProductById = async (id: string): Promise<ProductResponse | null> => {
        try {
            const response = await axiosInstance.get(`products/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    return { findAllProducts, findProductsByCotegory, findProductById };
}

export default useProductService;