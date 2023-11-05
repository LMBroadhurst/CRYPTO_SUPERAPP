import clientPromise from '../../../../lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    // const { username } = req.query

    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        const account = await db
            .collection('customers')
            .findOne({ username: 'hi' })
            .then(res => res)

        return NextResponse.json(account)
    } catch (e) {
        console.error(e)
    }
}
