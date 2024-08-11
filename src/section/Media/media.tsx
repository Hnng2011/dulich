'use client'

/* eslint-disable react/react-in-jsx-scope */
// import { createClient } from '@supabase/supabase-js'
import { Divider } from '@/components/custom/divider'
import { UploadMedia } from './upload-media'
import Grid from '@/components/custom/grid'
import { useGetImagesStorage } from '@/api/get_data'
import ViewAllImages from './view-all-image'
import { useState } from 'react'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
// const supabase = createClient(supabaseUrl, supabaseKey)


function Media() {
    const { data } = useGetImagesStorage();
    const [images, setImages] = useState<ImageSrc[] | undefined>(data)

    return (
        <div className='py-6'>
            <UploadMedia />
            <Divider />
            <ViewAllImages images={images} setImages={setImages} />
        </div >
    )
}

export default Media