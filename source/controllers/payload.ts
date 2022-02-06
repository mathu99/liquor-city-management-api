import { Request, Response, NextFunction } from 'express';

const testPayload = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Test Payload', JSON.stringify(req.body));
    return res.status(200).json({
        message: 'Success'
    });
};

export default { testPayload };