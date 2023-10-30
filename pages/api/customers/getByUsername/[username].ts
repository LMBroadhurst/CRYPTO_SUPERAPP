import {NextApiRequest} from 'next'
import clientPromise from '../../../../lib/mongodb'

export default async function (req: NextApiRequest, res: any) {
    const {username} = req.query

    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        const account = await db
            .collection('customers')
            .findOne({username: username})
            .then(res => res)

        return res.json(account)
    } catch (e) {
        console.error(e)
    }
}
