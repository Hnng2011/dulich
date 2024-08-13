import { cookies } from 'next/headers'
import axios, { AxiosResponse } from 'axios'

const handleCookies = () => {
  return cookies().get('token')
}

export async function POST(req: Request) {
  const token = handleCookies()
  const { type, images } = await req.json()

  const response: AxiosResponse<TourInfo> = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tour/${type === 'upload' ? 'upload-image' : 'update-image'}`,
    [...images],
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  )
  return Response.json(response.data)
}
