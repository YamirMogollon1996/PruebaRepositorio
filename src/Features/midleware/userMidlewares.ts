import { Request, Response, NextFunction } from "express"
export const MidlewaresUser = (req: Request, res: Response, next: NextFunction) => {

    const requestBoyd = req.headers["idepotemcia-key"]
    if (!requestBoyd) return res.send({ msg: "no mandaorn el key" })
    if (requestBoyd === "KEYUSER") throw new RequestError('Detalle de maessage', 900)
    next()
}


export class RequestError extends Error {
    public statusCode: number;
    public details?: any;

    constructor(message: string, statusCode: number = 400, details?: any) {
        super(message);
        this.name = "RequestError";
        this.statusCode = statusCode;
        this.details = details;
        Object.setPrototypeOf(this, RequestError.prototype);
    }
}
