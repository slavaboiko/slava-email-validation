"use strict";

import {Request, Response} from "express";


export const emailValidation = (req: Request, res: Response) => {
    if (req.body.email === null || req.body.email === undefined) res.status(400).json({ error: "email is not specified" });
    if (req.body.email === "") res.status(400).json({ error: "email cannot be empty string" });

    res.json({
        ok: true
    });
};