"use strict";

import { Response, Request, NextFunction } from "express";


export const emailValidation = (req: Request, res: Response) => {
    res.json({
        ok: true
    });
};