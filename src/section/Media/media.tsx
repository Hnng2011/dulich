'use client'

/* eslint-disable react/react-in-jsx-scope */
// import { createClient } from '@supabase/supabase-js'
import { Divider } from '@/components/custom/divider'
import { UploadMedia } from './upload-media'
import { useGetImagesStorage } from '@/api/get_data'
import ViewAllImages from './view-all-image'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
// const supabase = createClient(supabaseUrl, supabaseKey)


function Media() {
    const { data: images, mutate } = useGetImagesStorage();

    return (
        <div className='py-6'>
            <UploadMedia refreshData={mutate} />
            <Divider />
            <ViewAllImages images={images} refreshData={mutate} />
        </div >
    )
}

export default Media