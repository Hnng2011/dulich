/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from 'next/headers'
export const dynamic = 'force-dynamic'
import axios, { AxiosResponse } from 'axios'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  try {
    const response: AxiosResponse<Token> = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`,
      {
        email: username,
        password,
      },
    )

    // const maxAgeInSeconds = Math.floor(
    //   (new Date(response.data.new_tokens.access_token_expired_at).getTime() -
    //     new Date().getTime()) /
    //     1000,
    // )

    cookies().set('token', response.data.new_tokens.toString(), {
      secure: true,
      maxAge: new Date(
        response.data.new_tokens.access_token_expired_at,
      ).getTime(),
    })

    return Response.json(response.data)
  } catch (error: any) {
    return Response.json(error.response.data.message, {
      statusText: error.response.data,
      status: error.response.data.statusCode,
    })
  }
}
