import clientPromise from '../../../lib/mongodb'

export default async function GET(req: any, res: any) {
    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        const accounts = await db
            .collection('customers')
            .find({})
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray()

        return res.json(accounts)
    } catch (e) {
        console.error(e)
    }
}
