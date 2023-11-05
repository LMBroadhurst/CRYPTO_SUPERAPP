import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        const accounts = await db
            .collection('transactions')
            .find({})
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray()

        return NextResponse.json(accounts)
    } catch (e) {
        console.error(e)
    }
}
