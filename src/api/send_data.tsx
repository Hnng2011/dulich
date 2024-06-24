import axios from 'axios';

export default async function GetToken({ username, password }: { username: string, password: string }) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
            email: username,
            password
        })

        return response.data
    }

    catch (error) {
        throw new Error('Username or Password wrong')
    }

}
