interface Feature {
    title: string;
    price: number;
    type: string;
    features: string[];
}

interface PricingData {
    type: string;
    data: Feature[];
}