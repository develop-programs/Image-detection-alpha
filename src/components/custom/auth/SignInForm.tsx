"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().min(2, {
        message: "email must be at least 2 characters.",
    }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})


export function SignInForm() {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: true,
            callbackUrl: "/",
        })
    }
    return (
        <Card className="w-[25rem] select-none">
            <CardHeader>
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>Provide information to Log In to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                id="input-51"
                                                className="pe-9"
                                                placeholder="Password"
                                                type={isVisible ? "text" : "password"}
                                                {...field}
                                                aria-describedby="password-strength"
                                            />
                                            <button
                                                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                                type="button"
                                                onClick={() => setIsVisible(!isVisible)}
                                                aria-label={isVisible ? "Hide password" : "Show password"}
                                                aria-pressed={isVisible}
                                                aria-controls="password"
                                            >
                                                {isVisible ? (
                                                    <svg width="24" height="24" className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.9074 15.3487L4.55466 14.9698L4.55466 14.9698L3.9074 15.3487ZM3.9074 8.65133L4.55466 9.03021L4.55466 9.03021L3.9074 8.65133ZM13.9162 9.96831C14.216 10.2542 14.6907 10.2429 14.9766 9.94318C15.2624 9.64343 15.2512 9.16869 14.9514 8.88282L13.9162 9.96831ZM8.7432 14.9157C9.01234 15.2305 9.48577 15.2676 9.80062 14.9985C10.1155 14.7293 10.1525 14.2559 9.8834 13.941L8.7432 14.9157ZM20.4095 4.52614C20.7001 4.23095 20.6963 3.75609 20.4011 3.46551C20.1059 3.17493 19.6311 3.17867 19.3405 3.47386L20.4095 4.52614ZM4.15301 18.9024C3.86243 19.1976 3.86617 19.6725 4.16136 19.9631C4.45655 20.2536 4.93141 20.2499 5.22199 19.9547L4.15301 18.9024ZM4.55466 14.9698C3.48178 13.1369 3.48178 10.8631 4.55466 9.03021L3.26013 8.27246C1.91329 10.5734 1.91329 13.4266 3.26013 15.7275L4.55466 14.9698ZM6.45255 17.2388C5.72734 16.6258 5.08181 15.8704 4.55466 14.9698L3.26013 15.7275C3.87315 16.7748 4.62893 17.6614 5.48415 18.3843L6.45255 17.2388ZM4.55466 9.03021C7.26824 4.3944 13.2017 3.51996 17.1232 6.42527L18.0162 5.22C13.4173 1.81293 6.44922 2.8243 3.26013 8.27246L4.55466 9.03021ZM9.19331 12.0607C9.19331 10.467 10.4606 9.19699 11.9994 9.19699V7.69699C9.60973 7.69699 7.69331 9.66125 7.69331 12.0607H9.19331ZM11.9994 9.19699C12.7392 9.19699 13.4126 9.48802 13.9162 9.96831L14.9514 8.88282C14.1822 8.14925 13.1429 7.69699 11.9994 7.69699V9.19699ZM9.8834 13.941C9.45402 13.4387 9.19331 12.7825 9.19331 12.0607H7.69331C7.69331 13.1505 8.08864 14.15 8.7432 14.9157L9.8834 13.941ZM19.3405 3.47386L4.15301 18.9024L5.22199 19.9547L20.4095 4.52614L19.3405 3.47386Z" fill="#363853" />
                                                        <path d="M20.0925 8.65137C21.3023 10.7183 21.3023 13.2818 20.0925 15.3487C17.6744 19.4797 12.9072 20.859 8.92041 19.4868M15.5566 12.0607C15.5566 14.0562 13.9636 15.6733 11.9993 15.6733" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                ) : (
                                                    <svg width="24" height="24" className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.9074 8.65134C7.53762 2.44955 16.4624 2.44955 20.0926 8.65134C21.3025 10.7182 21.3025 13.2818 20.0926 15.3487C16.4624 21.5504 7.53762 21.5504 3.9074 15.3487C2.69753 13.2818 2.69753 10.7182 3.9074 8.65134Z" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.5567 12.0607C15.5567 14.0562 13.9637 15.6733 11.9995 15.6733C10.0352 15.6733 8.44336 14.0562 8.44336 12.0607C8.44336 10.0642 10.0352 8.44702 11.9995 8.44702C13.9637 8.44702 15.5567 10.0642 15.5567 12.0607Z" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>

                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="grid space-y-4">
                {
                    [{
                        title: "Google",
                        icon: (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7402 11.07C21.6902 10.56 21.2602 10.18 20.7502 10.18H13.2002C12.6502 10.18 12.2002 10.63 12.2002 11.18V12.89C12.2002 13.44 12.6502 13.89 13.2002 13.89H17.7102C17.6002 14.81 17.0002 16.2 15.6702 17.13C14.8202 17.72 13.6902 18.13 12.2002 18.13C12.1302 18.13 12.0702 18.13 12.0002 18.12C9.4502 18.04 7.2902 16.33 6.5102 13.98C6.3002 13.35 6.1802 12.69 6.1802 12C6.1802 11.31 6.3002 10.64 6.5002 10.02C6.5602 9.83999 6.6302 9.66001 6.7102 9.48001C7.6302 7.41001 9.6402 5.95 12.0002 5.88C12.0602 5.87 12.1302 5.87 12.2002 5.87C13.6302 5.87 14.7002 6.33999 15.4502 6.85999C15.8402 7.12999 16.3602 7.06999 16.7002 6.73999L18.0902 5.38C18.5302 4.95 18.4902 4.21999 17.9902 3.85999C16.4002 2.68999 14.4602 2 12.2002 2C12.1302 2 12.0702 2.00001 12.0002 2.01001C8.1702 2.08001 4.8802 4.30001 3.2702 7.51001C2.5902 8.87001 2.2002 10.39 2.2002 12C2.2002 13.61 2.5902 15.13 3.2702 16.49H3.2802C4.8902 19.7 8.1802 21.92 12.0002 21.99C12.0702 22 12.1302 22 12.2002 22C14.9002 22 17.1702 21.11 18.8202 19.58C20.7102 17.83 21.8002 15.27 21.8002 12.22C21.8002 11.79 21.7802 11.42 21.7402 11.07Z" fill="black" />
                            </svg>

                        )
                    },
                    {
                        title: "Github",
                        icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_7854_30)">
                                <path d="M18 38C8 41 8 33 4 32M32 44V36.26C32.075 35.3063 31.9462 34.3476 31.622 33.4476C31.2979 32.5476 30.7859 31.7268 30.12 31.04C36.4 30.34 43 27.96 43 17.04C42.9995 14.2477 41.9254 11.5624 40 9.54C40.9117 7.09701 40.8472 4.3967 39.82 2C39.82 2 37.46 1.3 32 4.96C27.416 3.71764 22.584 3.71764 18 4.96C12.54 1.3 10.18 2 10.18 2C9.15275 4.3967 9.08829 7.09701 10 9.54C8.06025 11.5774 6.98505 14.2869 7 17.1C7 27.94 13.6 30.32 19.88 31.1C19.222 31.7799 18.7145 32.5908 18.3906 33.4798C18.0667 34.3689 17.9336 35.3161 18 36.26V44" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>)
                    }].map((item, index) => (
                        <Button key={index} variant="outline">
                            {item.icon}
                            {item.title}
                        </Button>
                    ))
                }
            </CardFooter>
        </Card>
    )
}
