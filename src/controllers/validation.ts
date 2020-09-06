"use strict";

import {Request, Response} from "express";


export const emailValidation = (req: Request, res: Response) => {
    res.json({
        ok: true
    });
};