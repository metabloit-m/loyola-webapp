import dbConnect from "../../../lib/dbConnect";
import Metabloit from "../../../models/form"

export default async function handler(req, res){

    const {method} = req;
    await dbConnect();

    switch (method){
        case 'POST':
            try{
                const metabloit = await Metabloit.create(
                    req.body,
                );
                res.status(201).json({
                    success: true,
                    data: metabloit,
                })
            }
            catch (e){
                res.status(400).json({
                    success: false,
                    error: e,
                })
            }
            break;
        default:
            res.status(400).json({success: false})
            break;
    }
}