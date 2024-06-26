
import React from 'react'
import Container from '@/components/custom/container'
import { ArrowLeft } from 'lucide-react'
import Flex from '@/components/custom/flex'
import Link from 'next/link'

async function NotFound() {
    return (
        <Flex align='center' className='h-screen w-screen'>
            <Container>
                <div className='text-6xl font-black text-bitter'>
                    404 | Page Not Found
                </div>

                <Link href={'/'}>
                    <Flex gap={1} className='w-fit mt-6 text-muted-foreground'>
                        <ArrowLeft />
                        <div className='text-xl font-black '>
                            Back to Home
                        </div>
                    </Flex>
                </Link>
            </Container>
        </Flex >

    )

}

export default NotFound