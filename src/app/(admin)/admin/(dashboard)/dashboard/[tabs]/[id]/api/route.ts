import { cookies } from 'next/headers'
import axios, { AxiosResponse } from 'axios'
import { extractUUID } from '@/lib/utils'

const handleCookies = () => {
  return cookies().get('token')
}

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const token = handleCookies()
  const { info } = await req.json()

  const response: AxiosResponse<TourInfo> = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tour`,
    {
      ...info,
    },
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  )
  return Response.json(response.data)
}

export async function PATCH(req: Request) {
  const token = handleCookies()
  const { info } = await req.json()

  const response: AxiosResponse<TourInfo> = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tour/${info.tour_id}`,
    {
      ...info,
    },
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  )
  return Response.json(response.data)
}

export async function DELETE(req: Request) {
  const token = handleCookies()
  const tour_id = extractUUID(req.url)

  const response: AxiosResponse<TourInfo> = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tour/${tour_id}`,
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  )
  return Response.json(response.data)
}
