'use client'

/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import { useDirectoryFileUrls } from '@supabase-cache-helpers/storage-swr'
import { createClient } from '@supabase/supabase-js'
import { Divider } from '@/components/custom/divider'
import { UploadMedia } from './upload-media'
import Grid from '@/components/custom/grid'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)



function Media() {
    const { data: images } = useDirectoryFileUrls(
        supabase.storage.from("Tour"),
        null,
        "public",
    );

    return (
        <div className='py-6'>
            <UploadMedia />
            <Divider />
            <Grid template='col' count={6} >
                {
                    images?.map((img, idx) => {
                        return (
                            <div key={idx}>
                                <Image src={img.url} alt={img.name} />
                            </div>
                        )
                    })
                }
            </Grid>
        </div >
    )
}

export default Media