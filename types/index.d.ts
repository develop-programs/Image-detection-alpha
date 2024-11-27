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
interface UserData {
    id: string;
    name: string;
    email: string;
    image: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    subscriptions: Subscription;
}

interface Subscription {
    id: string;
    plan: string;
    credit: number;
    createdAt: string;
    updatedAt: string;
}