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
                    success:false
                })
            }
            break;
        case 'GET':
            try {
                const tests = await test.find({ email: req.body.email, password: req.body.password })
                if(tests.length === 0)
                    return res.status(400).json({success: false})
                res.status(201).json({success: true, data:tests})
            }
            catch (e) {
                res.status(400).json({
                    success: false,
                    data: e,
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