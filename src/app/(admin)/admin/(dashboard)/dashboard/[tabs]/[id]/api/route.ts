import { cookies } from 'next/headers'
import axios, { AxiosResponse } from 'axios'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const token = cookies().get('token')
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
  const token = cookies().get('token')
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
