import React from "react"
import Flex from "@/components/ui/flex"
import { LoaderCircle } from "lucide-react"

export default function Admin() {
    return <Flex justify="center" align="center" className="h-screen"><LoaderCircle className="h-20 w-20 animate-spin" /></Flex>
}