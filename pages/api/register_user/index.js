import test from "../../../models/user";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res){

    const {method} = req;
    await dbConnect();

    switch (method){
        case 'POST':
            try {
                const tests = await test.create(req.body);
                res.status(201).json({
                    success: true,
                    data: tests,
                })
            }
            catch (e) {
                res.status(400).json({
                    success:false,
                    error: e,
                })
            }
            break;

        default:
            res.status(400).json({
                success:false
            })
            break;
    }
}