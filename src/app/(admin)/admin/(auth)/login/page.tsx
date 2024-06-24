"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Container from "@/components/ui/container"
import Flex from "@/components/ui/flex"
import './style.css'
import Link from "next/link"
import GetToken from "@/api/send_data"
import { useToken } from "@/context/auth_provider"

import { LoaderCircle } from 'lucide-react'

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Please input user name",
    }),
    password: z.string().min(1, {
        message: "Please input password",
    }),
})

export default function LoginForm() {
    const { token, setToken } = useToken()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        try {
            const data = await GetToken(values)
            setToken(data.new_tokens)
        }
        catch (error) {
            setError('Error')
        }
    }

    return (
        <>
            {token !== undefined && token === null && <Flex align="start" justify="center" col className="h-screen" >
                <Container className="max-w-md relative p-12 rounded border-4 shadow">
                    <Container className="w-full h-full inset-0 absolute bg-subbackground bg-opacity-50 rounded background-image z-[-1]" />
                    <Form {...form}>
                        <h2 className="text-3xl font-bitter text-center mb-6">Login</h2>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
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
                                            <Input type="password" placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="h-6 text-destructive">{error}</div>
                            <Flex>
                                <Link href={'/admin/forgot-password'} className="text-sm">Forgot password?</Link>
                                <Button disabled={loading} type="submit"> {loading ? <LoaderCircle className="animate-spin" /> : 'Submit'}</Button>
                            </Flex>
                        </form>
                    </Form>
                </Container>
            </Flex >
            }
        </>
    )
}
