export interface PurchaseData {
    id: number;
    location: string;
    purchaseDate: string; // or Date if you prefer to work with Date objects
    category: string;
    description: string;
    price: number;
    name: string;
}