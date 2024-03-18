export interface RatingType {
    rate: number;
    count: number;
}

export interface ProductType {
    id: number | string;
    title: string;
    price: number | string;
    description: string;
    category: string;
    image: string;
    rating: RatingType;
}