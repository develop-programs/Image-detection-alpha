"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pricingInfo } from "@/json/pricingIfo";

export default function PricingData() {
    const [Active, setActive] = React.useState<string>("monthly");
    return (
        <div className="mt-6">
            <Tabs defaultValue="monthly">
                <div className="flex justify-center">
                    <TabsList>
                        {
                            pricingInfo.map((item: PricingData, index: number) => (
                                <TabsTrigger value={item.type} key={index}>
                                    {item.type}
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                </div>
                {
                    pricingInfo.map((item: PricingData, index: number) => (
                        <TabsContent value={item.type} key={index} className="w-full grid grid-flow-row">
                        </TabsContent>
                    ))
                }
            </Tabs>
        </div>
    )
}