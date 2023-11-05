import clientPromise from '@/lib/mongodb'

export default async function GET(req: any, res: any) {
    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        // limited to 100
        const accounts = await db
            .collection('accounts')
            .find({})
            .limit(100)
            .toArray()

        return res.json(accounts)
    } catch (e) {
        console.error(e)
    }
}
