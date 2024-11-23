"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from '@/components/ui/input';

export default function FloatingActionButton() {
    return (
        <section typeof="action button" aria-label="support button">
            <Popover>
                <PopoverTrigger asChild={true}>
                    <Button className="fixed bottom-12 right-12 rounded-full p-0 size-12">
                        <svg width="32" height="32" className="size-12" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_7920_12)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M15.9693 3.42974C15.0132 3.41259 14.0631 3.58427 13.1735 3.93495C12.2838 4.28562 11.4722 4.80839 10.7849 5.4733C10.0977 6.13822 9.54837 6.93218 9.1685 7.80976C8.79026 8.68357 8.58743 9.62313 8.57143 10.5751V20.5714C8.57143 21.8338 7.54807 22.8571 6.28571 22.8571H3.42857C1.53502 22.8571 0 21.3221 0 19.4286V14.8571C0 12.9636 1.53502 11.4286 3.42857 11.4286H5.14286V10.5355C5.16411 9.12841 5.46302 7.73927 6.02206 6.44777C6.5811 5.15627 7.38951 3.98777 8.40091 3.00923C9.41232 2.03068 10.6069 1.26132 11.9162 0.745241C13.2159 0.232917 14.6033 -0.0198153 16 0.00121214C17.3967 -0.0198153 18.7841 0.232917 20.0838 0.745241C21.3931 1.26132 22.5877 2.03068 23.5991 3.00923C24.6105 3.98777 25.419 5.15627 25.9778 6.44777C26.5369 7.73927 26.8357 9.12841 26.8569 10.5355L26.8574 10.5614L26.8571 11.4286H28.5714C30.4649 11.4286 32 12.9636 32 14.8571V19.4286C32 21.3221 30.4649 22.8571 28.5714 22.8571H26.8571V24C26.8571 25.667 26.195 27.2658 25.016 28.4446C24.005 29.4555 22.6852 30.0866 21.2783 30.2459C20.6914 31.2926 19.5712 32 18.2857 32H14.8571C12.9636 32 11.4286 30.4649 11.4286 28.5714C11.4286 26.6779 12.9636 25.1429 14.8571 25.1429H18.2857C19.5245 25.1429 20.6098 25.7998 21.2123 26.7845C21.7305 26.6651 22.2097 26.4023 22.5917 26.0203C23.1275 25.4846 23.4286 24.7577 23.4286 24V10.5751C23.4126 9.62315 23.2098 8.68357 22.8315 7.80976C22.4516 6.93218 21.9023 6.13822 21.2151 5.4733C20.5278 4.80839 19.7162 4.28562 18.8265 3.93495C17.9369 3.58427 16.9868 3.41259 16.0307 3.42974C16.0102 3.4301 15.9898 3.4301 15.9693 3.42974Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7920_12">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Button>
                </PopoverTrigger>
                <PopoverContent side={"top"} align="end" className="w-80 h-96 p-0">
                    <div className="flex flex-col h-full">
                        {/* Chat Header */}
                        <div className="p-3 border-b">
                            <h3 className="font-semibold">Chat Support</h3>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {/* Received Message */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm">Hello! How can I help you today?</p>
                                </div>
                            </div>

                            {/* Sent Message */}
                            <div className="flex items-center justify-end gap-2">
                                <div className="bg-blue-500 text-white rounded-lg p-2 max-w-[80%]">
                                    <p className="text-sm">I need help with my account</p>
                                </div>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="p-2 border-t">
                            <div className="flex items-center gap-2">
                                <Input placeholder='Enter your message' />
                                <Button className=''>
                                    send
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 9H3.5" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M5 15L4 15" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M4 12H2" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12.0405 12.7649C12.4547 12.7649 12.7905 12.4291 12.7905 12.0149C12.7905 11.6007 12.4547 11.2649 12.0405 11.2649V12.7649ZM9.26758 12.7649H12.0405V11.2649H9.26758V12.7649Z" fill="#0095FF" />
                                        <path d="M20.5392 9.47684L11.8369 4.80857C9.74273 3.6852 7.41866 5.81469 8.13127 8.2039L9.18255 11.7286C9.23827 11.9154 9.23817 12.1144 9.18225 12.3012L8.13677 15.7931C7.42185 18.181 9.74261 20.3131 11.8379 19.1934L20.5356 14.5453C22.4865 13.5027 22.4886 10.5226 20.5392 9.47684Z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </section>
    )
}
