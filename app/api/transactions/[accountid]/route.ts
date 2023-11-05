import {NextApiRequest} from 'next'
import clientPromise from '../../../../lib/mongodb'

export default async function (req: NextApiRequest, res: any) {
    // Need zod to parse the input query
    const {accountid} = req.query
    const query = {
        account_id: 996263,
    }

    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        const account = await db
            .collection('transactions')
            .findOne(query)
            .then(res => res)

        console.log(account)

        return res.json(account)
    } catch (e) {
        console.error(e)
    }
}
