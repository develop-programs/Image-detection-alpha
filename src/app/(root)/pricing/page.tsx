import PricingData from "@/components/custom/pricing/PricingData";

export default function page() {
    return (
        <div className="grid">
            <div className="w-full grid place-content-center gap-2 text-center">
                <h1 className="text-6xl font-bold">Start for free with 400 credits</h1>
                <span className="text-xl font-semibold">Choose the plan that's right for you.</span>
            </div>
            <PricingData />
        </div>
    )
}