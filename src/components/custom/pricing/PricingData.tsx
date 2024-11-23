"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pricingInfo } from "@/json/pricingIfo";

export default function PricingData() {
    const [Active, setActive] = React.useState<string>("monthly");
    return (
        <div className="mt-6">
            <Tabs defaultValue="monthly" className="space-y-12">
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
                        <TabsContent value={item.type} key={index} className="grid grid-flow-col gap-6">
                            {
                                item.data.map((data: Feature, index: number) => (
                                    <div key={index}
                                        className="flex flex-col items-center justify-start p-4 border border-gray-200 rounded-lg">
                                        <h4 className="text-lg font-semibold">{data.title}</h4>
                                        <p className="text-lg font-semibold mt-2">{data.price}</p>
                                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Get
                                            Started
                                        </button>
                                    </div>
                                ))
                            }
                        </TabsContent>
                    ))
                }
            </Tabs>
        </div>
    )
}