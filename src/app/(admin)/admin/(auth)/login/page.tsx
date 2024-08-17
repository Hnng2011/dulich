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
import Container from "@/components/custom/container"
import Flex from "@/components/custom/flex"
import './style.css'
import Link from "next/link"

import { LoaderCircle } from 'lucide-react'
import { useRouter } from "next/navigation"

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Please input user name",
    }),
    password: z.string().min(1, {
        message: "Please input password",
    }),
})

export default function LoginForm() {
    const router = useRouter()
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
        const response = await fetch('/admin/login/api', {
            method: 'POST',
            body: JSON.stringify(values),
        });

        response.status < 400 && router.push('/admin/dashboard')
        if (response.status > 300) {
            setLoading(false)
            setError('Password or username wrong!!!')
        }
    }


    return (

        <Flex align="start" justify="center" isCol className="h-screen" >
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
    )
}
