import PricingData from "@/components/custom/pricing/PricingData";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function page() {
    return (
        <div >
            <div className="container-xxxl grid place-content-center gap-2 text-center">
                <h1 className="text-6xl font-bold">Start for free with 400 credits</h1>
                <span className="text-xl font-semibold">Choose the plan that's right for you.</span>
                <PricingData />
                <div className="grid mt-12">
                    <span className="text-4xl font-semibold">Frequently Asked Questions</span>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It's animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}